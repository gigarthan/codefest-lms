import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";

class CourseListContainer extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Button>
            <Link to="/courses/new">Add New Course</Link>
          </Button>
        </Col>
        <Col>
          <CourseList />
        </Col>
      </Row>
    );
  }
}

export default CourseListContainer;
