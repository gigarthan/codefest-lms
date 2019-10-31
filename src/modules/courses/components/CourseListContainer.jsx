import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import { connect } from "react-redux";

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
          <CourseList courses={this.props.courses} />
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ courses }) {
  return { courses };
}

export default connect(mapStateToProps)(CourseListContainer);
