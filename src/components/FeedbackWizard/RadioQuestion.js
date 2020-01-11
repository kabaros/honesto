import React from "react";
import styles from "./RadioQuestion.module.css";

const QuestionCard = props => {
  const { question, recordAnswer, selectedAnswer } = props;
  const { title, options = [] } = question;

  console.log("ss");
  return (
    <div>
      <ul className={styles.optionsList}>
        {options.map(({ text }, index) => {
          return (
            <li
              key={index} // todo: this is not good, but don't have real ids
              onClick={() => recordAnswer(index)}
              className={`${styles.optionsItem} ${
                index === selectedAnswer ? styles.selectedOption : ""
              }`}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionCard;
