import React, { Component } from "react";
import AddCourse from "./AddCourse";
import "../styles/style.css";

class AddCourseContainer extends Component {
  render() {
    return (
      <div className="add__course">
        <AddCourse />
      </div>
    );
  }
}

export default AddCourseContainer;
