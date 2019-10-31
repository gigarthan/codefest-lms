import React, { Component } from "react";
import { Form, Input, Row, Col, Card, Select, Button, Checkbox } from "antd";

class AddCourse extends Component {
  state = {
    unitsCount: new Array(1).fill(1)
  };

  addUnit = () => {
    const length = this.state.unitsCount.length;
    this.setState({ unitsCount: new Array(length + 1).fill(1) });
  };

  renderUnit = (_, index) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <Card key={index} style={{ marginTop: "8px" }}>
        <Form.Item label="Questione">
          {getFieldDecorator("questione")(<Input />)}
        </Form.Item>
        <Form.Item label="Questione Description">
          {getFieldDecorator("questioneDescription")(
            <Input.TextArea autoSize={true} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("isItRight")(
            <Checkbox>Is it a right answer</Checkbox>
          )}
        </Form.Item>
      </Card>
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row>
        <Col span={8}>
          <Card title="Add">
            <Form>
              <Form.Item label="Course">
                {getFieldDecorator("course")(
                  <Select>
                    <Select.Option value="video">Video</Select.Option>
                    <Select.Option value="pdf">Pdf</Select.Option>
                  </Select>
                )}
              </Form.Item>

              {this.state.unitsCount.map(this.renderUnit)}
              <Button style={{ marginTop: "8px" }} onClick={this.addUnit}>
                Add Questione
              </Button>

              <Button
                style={{ width: "100%", marginTop: "16px" }}
                type="primary"
              >
                Create Questionnaire
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const withForm = Form.create("courseAddForm")(AddCourse);

export default withForm;
