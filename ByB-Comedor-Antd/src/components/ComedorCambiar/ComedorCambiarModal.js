import { Button, Divider, List, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  comedorCambiarService,
  comedorListarService,
} from "../../services/comedorService";
import { refreshToken } from "../../store/slices/users";

function ComedorCambiarModal({ onClose }) {
  const [comedorList, setComedorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const comedorListar = async () => {
    const response = await comedorListarService();
    if (response.data) setComedorList(response.data);
  };

  useEffect(() => {
    comedorListar();
  }, []);

  const handleComedorClick = async (comedorId) => {
    setLoading(true);
    try {
      const responseCambiarComedor = await comedorCambiarService(comedorId);
      if (responseCambiarComedor?.data?.success) {
        const responseData = await dispatch(refreshToken());
        if (responseData && responseData.token) navigate("/");
        onClose();
      } else {
        message.error(responseCambiarComedor?.data?.message || "ERROR");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <Modal title="Cambiar de comedor" onCancel={onClose} open={true}>
      <Divider>Click para seleccionar el comedor</Divider>
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={comedorList}
        renderItem={(item) => (
          <List.Item>
            <Button
              type="text"
              onClick={() => handleComedorClick(item.comedorId)}
              style={{ width: "100%", textAlign: "left", height: "100%" }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>
                  {item.titulo}
                </div>
                <div>{`${item.direccionCalle} ${item.direccionNumero}`}</div>
              </div>
            </Button>
          </List.Item>
        )}
      />
    </Modal>
  );
}

export default ComedorCambiarModal;
