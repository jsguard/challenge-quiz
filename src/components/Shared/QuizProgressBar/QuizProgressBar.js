import React from "react";
import { Progress } from 'reactstrap';
import "./QuizProgressBar.scss";

export const QuizProgressBar = ({
  current_step,
  total_step,
  score
}) => {

  const remaining_step = total_step - current_step;
  const max_percentage = (score + remaining_step) *100/total_step
  const min_percentage = score *100/total_step
  const current_percentage = score / current_step*100

  console.log(current_step, 'current_step')
  console.log(total_step, 'total_step')
  return (
    <div className="quiz-progress-container-fluid">
      <div>
        <p>{`Score ${current_percentage.toFixed(2)}%`}</p>
        <p>{`Score ${max_percentage.toFixed(2)}%`}</p>
      </div>
      <Progress multi>  
        <Progress bar color="min" value={min_percentage} />
        <Progress bar color="current" value={current_percentage-min_percentage} /> 
        <Progress bar color="max" value={max_percentage-current_percentage} />
      </Progress>
    </div>
  );
};

export default QuizProgressBar;