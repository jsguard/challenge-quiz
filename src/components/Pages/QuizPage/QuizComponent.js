import React from "react";
import { connect } from "react-redux";
import QuizProgressBar from "../../Shared/QuizProgressBar";
import QuizSubjectTest from "../../Shared/QuizSubjectTest";
import QuizScoreProgressBar from "../../Shared/QuizScoreProgressBar";
import "./QuizPage.scss";

class QuizComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      is_answered: false,
      correct_answered: false,
      is_finished: false,
      current_step: 0,
      test_step: 0,
      score: 0
    };
    this.onCheckedAnswer = this.onCheckedAnswer.bind(this)
    this.onMoveNext = this.onMoveNext.bind(this)
  }

  onCheckedAnswer = correct_answered =>{
    const { test_step, score } = this.state
    if(correct_answered == true){
      this.setState({is_answered: true, test_step: test_step+1, score: score+1, correct_answered: correct_answered})
    }else{
      this.setState({is_answered: true, test_step: test_step+1, correct_answered: correct_answered})
    }
    
  }

  onMoveNext = () =>{
    const current_step = this.state.current_step
    const questions = this.props.questions
    if(current_step < questions.length-1){
      this.setState({current_step: this.state.current_step+1, is_answered: false})
    }else{
      console.log('current_step', current_step)
      this.setState({is_finished: true})
    }

  }

  render() {
    const { current_step, test_step, is_answered, is_finished, correct_answered, score } = this.state
    const questions  = this.props.questions
    const total_step = questions.length
    const subject = questions[current_step]
    const { onCheckedAnswer, onMoveNext } = this

    return (
      <div>
        <QuizProgressBar 
          current_step={current_step} 
          total_step={total_step} 
        />
        {`Question ${current_step+1} of ${total_step}`}
        {<QuizSubjectTest 
          is_answered = {is_answered}
          subject= {subject}
          onCheckedAnswer = {onCheckedAnswer}
          />
        }
        {(is_answered && !is_finished)
          ? <div className="quiz-answer">
            {correct_answered
              ? (<p>Correct!</p>)
              : (<p>Sorry!</p>)
            }
             <a className="btn-next" onClick={()=>{onMoveNext()}}>Next Question</a>
            </div>
          : null
        }
        {test_step > 0 && <QuizScoreProgressBar 
          current_step={test_step}
          total_step={total_step}
          score={score}
          />
        }
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