import React from "react";
import { connect } from "react-redux";
import QuizComponent from "./QuizComponent"
import questions from "../../../constants/questions.json";
import "./QuizPage.scss";

class QuizPage extends React.Component {
  render() {
    return (
      <div>    
        <QuizComponent questions={questions} />   
      </div>
    );
  }
}



const mapStateToProps = () => {
    return {};
  };
  
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage);