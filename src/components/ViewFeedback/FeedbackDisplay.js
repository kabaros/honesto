import React from "react";
import styles from "../EmployeeList.module.css";
import RadioAnswer from "./RadioAnswer";
import TextAnswer from "./TextAnswer";

const getAnswerComponent = type => {
  if (type === "radio") return RadioAnswer;
  if (type === "scale") return RadioAnswer;
  return TextAnswer;
};
const FeedbackDisplay = props => {
  const { feedback = {} } = props;
  const { questions = [], name } = feedback;

  if (!name)
    return (
      <p className="text-center text-muted">
        Select a colleague to display the Feedback
      </p>
    );

  return (
    <div className="card rounded-0">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h2>{name}</h2>
        </li>
        {questions.map((question, index) => {
          const AnswerComponent = getAnswerComponent(question.type);
          return (
            <li key={index} className={`list-group-item`}>
              {question.title}
              <AnswerComponent question={question} answer={question.answer} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackDisplay;
