import { Avatar, Card, Col, Row, Tag } from "antd";
import "./style.css";
import { CalendarOutlined } from "@ant-design/icons";

const CalenderTable: React.FC = () => {
  return (
    <>
      <Card title="Calender Schedule" hoverable={true} className="calender-table-card">
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Meeting Importance</th>
          </tr>

          <tr>
            <td><Row>
                <Col span={5} className="table-col-align">
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                </Col>
                <Col span={19} className="table-header-text">
                    <h5>Call with hilda</h5>
                    <p><CalendarOutlined /> 21 Jul | 08:20-10:30</p>
                </Col>
                </Row></td>
            <td className="table-para"><p>a list of topics, action items, and activities you want to discuss during the meeting</p></td>
            <td  style={{textAlign:'center'}}><Tag color="green">High</Tag></td>
          </tr>

          <tr>
          <td><Row>
                <Col span={5} className="table-col-align">
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                </Col>
                <Col span={19} className="table-header-text">
                    <h5>Conference call</h5>
                    <p><CalendarOutlined /> 21 Jul | 08:20-10:30</p>
                </Col>
                </Row></td>
                <td className="table-para"><p>a list of topics, action items, and activities you want to discuss during the meeting</p></td>
            <td  style={{textAlign:'center'}}><Tag color="warning">Avg</Tag></td>
          </tr>

          {/* <tr>
            <td><Row>
                <Col span={5} className="table-col-align">
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                </Col>
                <Col span={19}>
                    <h5>Meeting with Mark</h5>
                    <p><CalendarOutlined /> 21 Jul | 08:20-10:30</p>
                </Col>
                </Row></td>
            <td className="table-para"><p>a list of topics, action items, and activities you want to discuss during the meeting</p></td>
            <td  style={{textAlign:'center'}}><Tag color="#108ee9">Avg</Tag></td>
          </tr> */}

        </table>
      </Card>
    </>
  );
};
export default CalenderTable;
