import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Card, Typography } from "antd";
const { Title } = Typography;
class SignIn extends Component {
  render() {
    return (
      <Row type="flex" justify="center" align="center">
        <Col span={8}>
          <Card>
            <Title level={2}>Sign In</Title>
            <Form>
              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Password" type="password" />
              </Form.Item>
              <Button style={{ width: "100%" }} type="primary">
                SignIn
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SignIn;
