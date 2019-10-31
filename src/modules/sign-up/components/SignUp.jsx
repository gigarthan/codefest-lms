import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Card, Typography } from "antd";
const { Title } = Typography;
class SignIn extends Component {
  render() {
    return (
      <Row type="flex" justify="center" align="center">
        <Col span={8}>
          <Card>
            <Title level={2}>Create Your Account</Title>
            <Form>
              <Form.Item>
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item>
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Password" type="password" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Confirm Password" type="password" />
              </Form.Item>
              <Button style={{ width: "100%" }} type="primary">
                Create
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SignIn;
