import React, { Component } from "react";
import AddQuestions from "./AddQuestions";
import "../styles/style.css";

class AddQuestionsContainer extends Component {
  render() {
    return (
      <div className="add__Questions">
        <AddQuestions />
      </div>
    );
  }
}

export default AddQuestionsContainer;
