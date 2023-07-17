import React from "react";
import { AppstoreOutlined, PoundCircleOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "antd/es/typography/Link";

const { Header, Content, Footer, Sider } = Layout;

const Sidenav: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ background: "rgba(0, 167, 234, 1)" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ paddingTop: "20px", background: "rgba(0, 167, 234, 1)" }}>
          <img src="/asset/logo/c2i-logo.png" alt="Img" />
        </div>
        <Menu
          style={{ background: "rgba(0, 167, 234, 1)" }}
          mode="inline"
        >
          <Menu.Item key={"DASHBOARD"}>
            <>
              <span> <AppstoreOutlined className="menu-icons"/> Dashboard </span>
            </>
          </Menu.Item>
          <Menu.Item key={"INVESTOR"}>
            <>
              <span> <PoundCircleOutlined className="menu-icons"/> Investor </span>
            </>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidenav;
