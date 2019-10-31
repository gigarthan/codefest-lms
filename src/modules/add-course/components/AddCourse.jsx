import React, { Component } from "react";
import { Form, Input, Row, Col, Card, Select, Button } from "antd";

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
        <Form.Item label="Unit Name">
          {getFieldDecorator("unitTitle")(<Input />)}
        </Form.Item>
        <Form.Item label="Content Type">
          {getFieldDecorator("contentType")(
            <Select>
              <Select.Option value="video">Video</Select.Option>
              <Select.Option value="pdf">Pdf</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Content Link">
          {getFieldDecorator("content")(<Input />)}
        </Form.Item>
        <Form.Item label="Content Description">
          {getFieldDecorator("unitDescription")(
            <Input.TextArea autoSize={true} />
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
              <Form.Item label="Course Name">
                {getFieldDecorator("name")(<Input />)}
              </Form.Item>
              <Form.Item label="Course Description">
                {getFieldDecorator("description")(
                  <Input.TextArea autoSize={true} />
                )}
              </Form.Item>
              {this.state.unitsCount.map(this.renderUnit)}
              <Button style={{ marginTop: "8px" }} onClick={this.addUnit}>
                Add Unit
              </Button>

              <Button
                style={{ width: "100%", marginTop: "16px" }}
                type="primary"
              >
                Add Course
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
