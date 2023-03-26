import { BellOutlined } from "@ant-design/icons";
import {
  Popover,
  Badge,
  Tabs,
  Spin,
  List,
  Empty,
  Divider,
  Button,
  Progress,
} from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNotifications } from "./useNotification";
import NotificationList from "./NotificationList";
import Avatar from "antd/lib/avatar/avatar";
import "./notificationStyle.scss";
import dayjs from "dayjs";
import NotificationIcon from "../../assets/images/petitionIcon.png";

const listData = [
  {
    email: "Email",
    picture:
      "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    name: "Nombre1",
  },
];

function Notification(props) {
  const notifications = useNotifications();
  const dispatch = useDispatch();
  const {
    loading,
    totalNotificationsPending,
    notificationList,
    notificationUpdatesList,
  } = useSelector((state) => state.notifications);

  const onPopupVisibleChange = (isVisible) => {
    if (isVisible) {
      notifications.get();
      notifications.setCounter(0);
    }
  };

  const clearNotifications = () => {
    notifications.clear();
  };

  const getProgressStatus = (item) => {
    if (item.isError) return "exception";
  };

  const notificationBox = () => {
    let tabPaneContent;
    if (notificationUpdatesList.length == 0 && notificationList.length == 0) {
      tabPaneContent = (
        <div>
          <Empty
            description={"No hay notificaciones nuevas"}
            image="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
          />
        </div>
      );
    } else {
      let list = [];
      tabPaneContent = (
        <List
          dataSource={list.concat(notificationList, notificationUpdatesList)}
          renderItem={(item) => (
            <span className="actionNotice">
              <List.Item key={item.mensajeId}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={NotificationIcon}
                      style={{
                        alignItems: "center",
                      }}
                    />
                  }
                  title={
                    <div className={"notification-title"}>
                      {item.asunto || item.title}
                      {item.extra && (
                        <div className={"notification-extra"}>{item.extra}</div>
                      )}
                    </div>
                  }
                  //   description=
                  description={
                    <div>
                      {item.description && (
                        <div className={"notification-description"}>
                          {item.description}
                        </div>
                      )}
                      {item.percent && (
                        <Progress
                          percent={item.percent}
                          status={getProgressStatus(item)}
                        />
                      )}
                      <div className={"notification-datetime"}>
                        {dayjs(item.fecha).fromNow()}
                      </div>
                    </div>
                  }
                />
              </List.Item>
            </span>
          )}
        />
      );
    }
    return (
      <Spin spinning={loading} delay={0}>
        <Tabs
          centered
          // className={styles.tabs}
          //   onChange={this.onTabChange}
          style={{ minWidth: 22, width: 336, padding: 0 }}
        >
          <Tabs.TabPane
            tab={`Notificaciones (${
              notificationList.length + notificationUpdatesList.length
            })`}
            key={1}
          >
            {tabPaneContent}
            {(notificationList.length > 0 ||
              notificationUpdatesList.length > 0) && (
              <div>
                <Divider style={{ marginTop: 7, marginBottom: 7 }} />
                <Button
                  onClick={clearNotifications}
                  style={{ width: "100%", border: "none", boxShadow: "none" }}
                >
                  Vaciar notificaciones
                </Button>
              </div>
            )}
          </Tabs.TabPane>
        </Tabs>
      </Spin>
    );
  };
  return (
    <Popover
      id="NotificationPopover"
      placement="bottomRight"
      content={notificationBox}
      // popupClassName={styles.popover}
      trigger="click"
      arrowPointAtCenter
      align={{ offset: [20, -16] }}
      onVisibleChange={onPopupVisibleChange}
      // {...popoverProps}
    >
      <span className={"action"}>
        <Badge count={totalNotificationsPending}>
          <BellOutlined style={{ fontSize: 18 }} />
        </Badge>
      </span>
    </Popover>
  );
}

export default Notification;
