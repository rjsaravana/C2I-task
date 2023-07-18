import React, { useState } from "react";
import { Button, Layout, Space } from "antd";
import "../style.css";
import Sidenav from "../sidenav/sidenav";
import Dashboard from "../dashboard.tsx/dashboard-index";
import { DownOutlined } from "@ant-design/icons";
import Investor from "../investor.tsx/invesor";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "right",
  color: "rgba(15, 81, 144, 1)",
  height: 80,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "rgba(255, 255, 255, 1)",
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#FFF",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  width: "150px",
  lineHeight: "120px",
  color: "rgba(15, 81, 144, 1)",
  backgroundColor: "rgba(0, 167, 234, 1)",
};

const footerStyle: React.CSSProperties = {
  color: "rgba(15, 81, 144, 1)",
  backgroundColor: "#FFF",
};

const Menubar: React.FC = () => {
  const [sideMenu, setMenuValue] = useState<string>("DASHBOARD");

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout style={{ height: "100vh" }}>
        <Sider style={siderStyle} className="sidenav-layout">
          <Sidenav setMenuValue={setMenuValue} />
        </Sider>
        <Layout>
          <Header style={headerStyle} className="headernav">
            <Button className="logout-btn">
              <img
                src="/asset/icons/shield_person.svg"
                alt="Img"
                style={{ width: "25px", marginRight: "10px" }}
              />
              <DownOutlined
                style={{ color: "rgba(15,81,144,1)", fontWeight: "600" }}
              />
            </Button>
          </Header>
          <Content style={contentStyle} className="content-layout">
            {sideMenu === "DASHBOARD" ? <Dashboard /> : <Investor />}
          </Content>
          <Footer style={footerStyle}></Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default Menubar;
