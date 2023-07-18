import { Row, Col, Input, Image, Button, Card } from "antd";
import "../style.css";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";

const Investor: React.FC = () => {
  return (
    <>
      <div className="investor-head-content">
        <div style={{ height: "100px" }}>
          <h4>Investor List</h4>
        </div>

        <div className="investor-head-search">
          <Input
            size="large"
            placeholder="Search by Title "
            prefix={<SearchOutlined />}
          />

          <Button>
            <PlusCircleOutlined style={{ marginRight: "3px" }} />
            Create
          </Button>
        </div>
      </div>

      <Row gutter={24} style={{ margin: "0px", padding: "20px" }}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Card className="card-align-bg" hoverable={true}>
            <Row gutter={16}>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="company-card-image"
              >
                <Image width={100} src="/asset/logo/1c-logo.svg" />
              </Col>

              <Col
                xl={15}
                lg={15}
                md={15}
                sm={15}
                xs={15}
                style={{ wordWrap: "break-word" }}
                className="card-content"
              >
                <h4>1stCollab</h4>
                <h6>1stCollab@gmail.com</h6>
                <h6>+919798718368</h6>
              </Col>

              <Col
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="card-mobile-details"
              >
                <h5>Details</h5>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Card className="card-align-bg" hoverable={true}>
            <Row gutter={16}>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="company-card-image"
              >
                <Image width={100} src="/asset/logo/1c-logo.svg" />
              </Col>

              <Col
                xl={15}
                lg={15}
                md={15}
                sm={15}
                xs={15}
                style={{ wordWrap: "break-word" }}
                className="card-content"
              >
                <h4>1stCollab</h4>
                <h6>1stCollab@gmail.com</h6>
                <h6>+919798718368</h6>
              </Col>

              <Col
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="card-mobile-details"
              >
                <h5>Details</h5>
              </Col>
            </Row>
          </Card>
        </Col>


        <Col
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <Card className="card-align-bg" hoverable={true}>
            <Row gutter={16}>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="company-card-image"
              >
                <Image width={100} src="/asset/logo/1c-logo.svg" />
              </Col>

              <Col
                xl={15}
                lg={15}
                md={15}
                sm={15}
                xs={15}
                style={{ wordWrap: "break-word" }}
                className="card-content"
              >
                <h4>1stCollab</h4>
                <h6>1stCollab@gmail.com</h6>
                <h6>+919798718368</h6>
              </Col>

              <Col
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="card-mobile-details"
              >
                <h5>Details</h5>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Card className="card-align-bg" hoverable={true}>
            <Row gutter={16}>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="company-card-image"
              >
                <Image width={100} src="/asset/logo/1c-logo.svg" />
              </Col>

              <Col
                xl={15}
                lg={15}
                md={15}
                sm={15}
                xs={15}
                style={{ wordWrap: "break-word" }}
                className="card-content"
              >
                <h4>1stCollab</h4>
                <h6>1stCollab@gmail.com</h6>
                <h6>+919798718368</h6>
              </Col>

              <Col
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="card-mobile-details"
              >
                <h5>Details</h5>
              </Col>
            </Row>
          </Card>
        </Col>


        <Col
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <Card className="card-align-bg" hoverable={true}>
            <Row gutter={16}>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="company-card-image"
              >
                <Image width={100} src="/asset/logo/1c-logo.svg" />
              </Col>

              <Col
                xl={15}
                lg={15}
                md={15}
                sm={15}
                xs={15}
                style={{ wordWrap: "break-word" }}
                className="card-content"
              >
                <h4>1stCollab</h4>
                <h6>1stCollab@gmail.com</h6>
                <h6>+919798718368</h6>
              </Col>

              <Col
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="card-mobile-details"
              >
                <h5>Details</h5>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Card className="card-align-bg" hoverable={true}>
            <Row gutter={16}>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="company-card-image"
              >
                <Image width={100} src="/asset/logo/1c-logo.svg" />
              </Col>

              <Col
                xl={15}
                lg={15}
                md={15}
                sm={15}
                xs={15}
                style={{ wordWrap: "break-word" }}
                className="card-content"
              >
                <h4>1stCollab</h4>
                <h6>1stCollab@gmail.com</h6>
                <h6>+919798718368</h6>
              </Col>

              <Col
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className="card-mobile-details"
              >
                <h5>Details</h5>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Investor;
