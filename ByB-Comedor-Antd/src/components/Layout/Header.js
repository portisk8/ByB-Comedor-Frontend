import React, { useState } from "react";
import "./index.scss";
import { Layout, Menu, Row, Col, Dropdown, message } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/users";
import { sideMenuCollapse } from "../../store/slices/layout";
import Notification from "../Notifications/Notification";
import ENV from "../../common/environment";
import Topnav from "./Topnav";
import { useWindowSize } from "../../utils/Hooks/useWindowSize";
import ComedorCambiarModal from "../ComedorCambiar/ComedorCambiarModal";

const { MENU } = ENV;
const { Header: AntHeader, Content, Sider } = Layout;

function Header() {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [comedorCambiarModal, setComedorCambiarModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const windowSize = useWindowSize();

  const handleMenuClick = async (e) => {
    console.log("click", e);
    switch (e.key) {
      case "1":
        dispatch(logout());
        break;
      case "2":
        setComedorCambiarModal(true);
        break;

      default:
        break;
    }
  };

  return (
    <AntHeader
      className={["site-layout-background", MENU.THEME, MENU.TYPE]}
      style={{ padding: 0, paddingRight: 20 }}
    >
      <Row justify="space-between">
        {MENU.TYPE?.toLocaleLowerCase() == "top" ? (
          <Col xs={6} sm={16} md={18} lg={20}>
            <Topnav />
          </Col>
        ) : (
          <Col xs={3} md={2}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => dispatch(sideMenuCollapse()),
              }
            )}
          </Col>
        )}
        {/* {windowSize > 720 &&} */}
        <Col
          xs={12}
          md={12}
          style={{
            textAlign: "center",
            fontSize: windowSize.width < 720 ? 15 : 24,
            fontWeight: 700,
          }}
        >
          {user.comedorDescripcion}
        </Col>

        <Col xs={6} sm={8} md={6} lg={4}>
          <div className={"right"}>
            {/* <Notification /> */}
            <Dropdown
              menu={{
                items: [
                  {
                    key: "2",
                    label: (
                      <a>
                        <BankOutlined /> Cambiar de comedor
                      </a>
                    ),
                  },
                  {
                    key: "1",
                    label: (
                      <a>
                        <LogoutOutlined /> Salir
                      </a>
                    ),
                  },
                ],
                onClick: handleMenuClick,
              }}
              placement="bottom"
            >
              {/* <Button type="text" size="large"> */}
              <span className={"action account"}>
                <span style={{ color: "#1890ff" }}>
                  <UserOutlined />
                </span>{" "}
                <span className={"name"}>{user.username}</span>
              </span>
              {/* </Button> */}
            </Dropdown>
          </div>
        </Col>
      </Row>
      {comedorCambiarModal && (
        <ComedorCambiarModal onClose={() => setComedorCambiarModal(false)} />
      )}
    </AntHeader>
  );
}

export default Header;
