import React, { Component } from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";

class CourseList extends Component {
  state = {
    courses: Array(25).fill({
      title: "JavaScript Basics",
      description:
        "The primary topics in this part of the specialization are: data structures (heaps, balanced search trees, hash tables, bloom filters), graph primitives (applications of breadth-first and depth-first search, connectivity, shortest paths), and their applications (ranging from deduplication to social network analysis)."
    })
  };

  renderCourse = ({ title, description }) => {
    return (
      <Col span={8}>
        <Card title={title}>
          <p style={{ textAlign: "justify" }}>{description}</p>
          <Button style={{ width: "100%" }}>
            <Link to="/courses/id">View Course</Link>
          </Button>
        </Card>
      </Col>
    );
  };

  render() {
    return (
      <Row>
        <Col>
          <Row gutter={[16, 16]}>
            <Col>{this.props.courses.map(this.renderCourse)}</Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default CourseList;
