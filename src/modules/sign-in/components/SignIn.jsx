import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Card, Typography } from "antd";
const { Title } = Typography;
class SignIn extends Component {
  submit = () => {
    console.log("submit");
    this.props.form.validateFields((e, values) => {
      if (!e) {
        const { email, password } = values;
        this.props.onSignIn({ email, password });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" align="center">
        <Col span={8}>
          <Card>
            <Title level={2}>Sign In</Title>
            <Form>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [{ type: "email" }, { required: true }]
                })(<Input placeholder="Email" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: true }]
                })(<Input placeholder="Password" type="password" />)}
              </Form.Item>
              <Button
                onClick={this.submit}
                style={{ width: "100%" }}
                type="primary"
              >
                SignIn
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const withForm = Form.create("signin")(SignIn);

export default withForm;
