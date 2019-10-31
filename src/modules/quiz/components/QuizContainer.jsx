import React, { Component } from "react";
import Quiz from "./Quiz";
import "../styles/style.css";

class QuizContainer extends Component {
  render() {
    return (
      <div className="quiz">
        <Quiz />
      </div>
    );
  }
}

export default QuizContainer;
