import { Card, Col, Row, Tag } from "antd";
import "./style.css";
import CalenderTable from "./calender-table";

const Dashboard: React.FC = () => {
  return (
    <>
      <h3 className="dashboard-header">Welcome to Connect2Investors!</h3>
      <Row gutter={24} style={{padding:'30px',margin:'0px'}}>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Card className="dashboard-cardstyle" hoverable={true}>
            <Row>
              <Col span={18}>
                <h4 className="dashboard-card-head">No.of Investors</h4>
                <h2 className="dashboard-card-number">20</h2>
                <div style={{marginTop:'20px'}}>
                  <Tag className="dashboard-tag" color="purple">
                    Year of 2023
                  </Tag>
                </div>
              </Col>
              <Col span={6}>
                <img
                  style={{ width: "80px" }}
                  className="dashboard-icons-img"
                  src="/asset/icons/savings.svg"
                  alt="Img"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Card className="dashboard-cardstyle" hoverable={true}>
            <Row>
              <Col span={18}>
                <h4 className="dashboard-card-head">No.of Mentors</h4>
                <h2 className="dashboard-card-number">20</h2>
                <div style={{marginTop:'20px'}}>
                  <Tag className="dashboard-tag" color="purple">
                    Year of 2023
                  </Tag>
                </div>
              </Col>
              <Col span={6}>
                <img
                  style={{ width: "80px" }}
                  className="dashboard-icons-img"
                  src="/asset/icons/partner_exchange.svg"
                  alt="Img"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Card className="dashboard-cardstyle" hoverable={true}>
            <Row>
              <Col span={18}>
                <h4 className="dashboard-card-head">No.of Startupss</h4>
                <h2 className="dashboard-card-number">20</h2>
                <div style={{marginTop:'20px'}}>
                  <Tag className="dashboard-tag" color="purple">
                    Year of 2023
                  </Tag>
                </div>
              </Col>
              <Col span={6}>
                <img
                  style={{ width: "80px" }}
                  className="dashboard-icons-img"
                  src="/asset/icons/rocket_launch.svg"
                  alt="Img"
                />
              </Col>
            </Row>
          </Card>
        </Col>
        </Row>

        <CalenderTable />
    </>
  );
};
export default Dashboard;
