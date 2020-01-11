import React from "react";
import styles from "./RadioQuestion.module.css";

const QuestionCard = props => {
  const { question } = props;
  const { title, options = [] } = question;
  console.log(question);
  return (
    <div>
      <ul className={styles.optionsList}>
        {options.map(({ text }) => {
          return <li className={styles.optionsItem}>{text}</li>;
        })}
      </ul>
    </div>
  );
};

export default QuestionCard;
