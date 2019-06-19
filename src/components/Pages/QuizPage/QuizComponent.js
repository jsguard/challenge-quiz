import React from "react";
import { connect } from "react-redux";
import QuizSubjectTest from "../../Shared/QuizSubjectTest";
import QuizProgressBar from "../../Shared/QuizProgressBar";
import "./QuizPage.scss";

class QuizComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      current_step: 0
    };
    this.onCheckedAnswer = this.onCheckedAnswer.bind(this)
  }

  onCheckedAnswer = score =>{
    console.log('score', score)
  }

  render() {
    const { current_step } = this.state
    const questions  = this.props.questions
    const total_step = questions.length
    const subject = questions[current_step]
    const { onCheckedAnswer } = this
    return (
      <div>
        {`Question ${current_step+1} of ${total_step}`}
        <QuizSubjectTest 
          subject= {subject}
          onCheckedAnswer = {onCheckedAnswer}
          />
        <QuizProgressBar />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizComponent);