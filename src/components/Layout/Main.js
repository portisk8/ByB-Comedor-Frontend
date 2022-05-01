import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { Layout, Drawer, Affix, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Footer from "./Footer";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  let { pathname } = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setVisible(false);
      navigate("/sign-in");
    } else {
      setVisible(true);
    }
  }, []);

  return (
    // <Layout>
    //   <Content>{children}</Content>
    // </Layout>
    visible ? (
      <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">{collapsed ? "ByB" : "ByB-Comedor"}</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <AntHeader className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </AntHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    ) : (
      children
    )
  );
}

export default Main;
