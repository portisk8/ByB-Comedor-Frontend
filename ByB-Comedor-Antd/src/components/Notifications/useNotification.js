import { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import CONFIG from "../../common/environment";
import { useDispatch, useSelector } from "react-redux";
import {
  clearNotifications,
  getNotifications,
  incrementTotalNotificationsPending,
  setHub,
  setTotalNotificationsPending,
  updateNotification,
} from "../../store/slices/notifications";
import { notification } from "antd";

export function useNotifications() {
  const dispatch = useDispatch();

  const { notificationUpdatesList } = useSelector(
    (state) => state.notifications
  );
  const updateNotificationState = (notification) => {};

  const connect = () => {
    let connection = new HubConnectionBuilder()
      .withUrl(`${CONFIG.API_URL}/signalr/notificaciones`)
      .build();

    connection.on("notificacion", (notificacion) => {
      dispatch(incrementTotalNotificationsPending());
      notification["info"]({
        message: "Notificacion",
        description: notificacion,
      });
    });

    connection.on("actualizacion", (notificacion) => {
      try {
        console.log(JSON.parse(notificacion));
        var notificationObj = JSON.parse(notificacion);
        notificationObj.mensajeId = notificationObj.identification;
        // dispatch(incrementTotalNotificationsPending());
        let list = [];
        list.concat(notificationUpdatesList);
        debugger;
        let indexOf = list.findIndex(
          (x) => x.identification == notificationObj.identification
        );
        if (indexOf > -1) list.slice(indexOf, 1);
        // else
        //   notification["info"]({
        //     message: "Notificación",
        //     description: notificationObj.message,
        //   });
        list.push(notificationObj);
        dispatch(updateNotification(list));
      } catch (error) {
        console.error(error);
      }
    });

    connection
      .start()
      .then(() => {
        //una vez iniciado, nos registramos al canal

        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (currentUser && currentUser.usuario_id) {
          connection
            .invoke("addToGroup", currentUser.usuario_id.toString())
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => {
        console.log("Error al iniciar la conexión con el hub");
      });
    // dispatch(setHub(connection));
  };

  useEffect(() => {
    connect();
  }, []); // Empty array ensures that effect is only run on mount

  const get = async () => {
    return dispatch(getNotifications());
  };
  const clear = async () => {
    return dispatch(clearNotifications());
  };
  const setCounter = (counter) => {
    return dispatch(setTotalNotificationsPending(0));
  };
  return { get, clear, setCounter };
}
