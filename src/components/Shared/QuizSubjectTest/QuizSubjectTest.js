import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import { shuffle } from "../../../util/helpers"

export const QuizSubjectTest = ({
  subject,
  onCheckedAnswer
}) => {

  const styles = {
    category: {
      fontSize: "0.7em"
    },
    question: {
      marginTop: "30px",
      fontSize: "1em"
    },
    answers: {
      display: "grid",
      gridTemplateColumns: "auto auto"
    },
    answer: {
      width: "150px",
      height: "30px",
      paddingTop: "5px",
      background: "#e5e6e5",
      border: "1px solid black",
      borderRadius: "3px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      userSelect: "none"
    }
  }


  const calcDifficulty = difficulty =>{
    if(difficulty == 'hard'){
      return 3;
    }else if(difficulty == 'medium'){
      return 2;
    }else if(difficulty == 'easy'){
      return 1;
    }
  }

  const checkAnswer = answer =>{
    if(subject['correct_answer'] == answer){
      onCheckedAnswer(true);
    }else{
      onCheckedAnswer(false);
    }
  }
 
  const { category, type, difficulty,question, correct_answer, incorrect_answers} = subject
  const answers = shuffle([...incorrect_answers, correct_answer])


  return (
    <div className="quiz-subject-container-fluid">
      <StarRatingComponent 
          name="difficulty" 
          starCount={5}
          value={calcDifficulty(difficulty)}
          editing={false}
        />
      <p style={styles.category}>{decodeURIComponent(category)}</p>
      <div className="quiz-subject-question" style={styles.question}>
        <p>{decodeURIComponent(question)}</p>
      </div>
      <div className="quiz-subject-answers" style={styles.answers}>
        {answers.map((answer, index) => (
          <a key={index} 
             style={styles.answer}
             onClick={()=>{checkAnswer(answer)}}>
            {decodeURIComponent(answer)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuizSubjectTest;
