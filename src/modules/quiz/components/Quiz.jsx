import React, { Component } from "react";
import { Row, Col, Card, Form, Checkbox, Typography, Button } from "antd";

const { Title } = Typography;

class Quiz extends Component {
  state = {
    qs: Array(10).fill({
      questions: "whats js?",
      answer: ["languaage", "framework", "fruit", "nothing"]
    })
  };

  renderQuestione = q => {
    const { questions, answer } = q;
    const { getFieldDecorator } = this.props.form;
    const options = answer.map(a => ({ label: a, value: a }));
    return (
      <Form.Item>
        <div>
          <Title level={4}>{questions}</Title>
        </div>
        {getFieldDecorator("q")(
          <Checkbox.Group options={options}></Checkbox.Group>
        )}
      </Form.Item>
    );
  };

  render() {
    return (
      <Row>
        <Col span={12}>
          <Card>
            <Form>
              {this.state.qs.map(this.renderQuestione)}
              <Button>Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const withForm = Form.create("quiz")(Quiz);

export default withForm;
