import { AppstoreOutlined, PoundCircleOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import Link from "antd/es/typography/Link";
import MenuItem from "antd/es/menu/MenuItem";
import Dashboard from "../dashboard.tsx/dashboard-index";
import Investor from "../investor.tsx/invesor";

const { Header, Content, Footer, Sider } = Layout;

// const items: MenuItem[] = [
//   getItem("Dashboard", "DASHBOARD", <Dashboard />),
//   getItem("Mentor", "INVESTOR", <Investor />),
// ];
interface sideNavPropType {
  setMenuValue: React.Dispatch<React.SetStateAction<string>>
}


const Sidenav: React.FC<sideNavPropType> = ({setMenuValue})  => {
  const [collapsed, setCollapsed] = useState(false);

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
          defaultSelectedKeys={["DASHBOARD"]}
          className="menu-sidenav-layout"
          onClick={(e) => setMenuValue(e?.key)}
        >
          <Menu.Item key={"DASHBOARD"}>
            <>
              <span>
                {" "}
                <AppstoreOutlined
                  className="menu-icons"
                  style={{ marginRight: "8px" }}
                />{" "}
                Dashboard{" "}
              </span>
            </>
          </Menu.Item>
          <Menu.Item key={"INVESTOR"}>
            <>
              <span style={{ marginLeft: "-18px" }}>
                {" "}
                <PoundCircleOutlined
                  className="menu-icons"
                  style={{ marginRight: "8px" }}
                />{" "}
                Investor{" "}
              </span>
            </>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidenav;
