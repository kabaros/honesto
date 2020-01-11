import React from "react";
import styles from "./RadioQuestion.module.css";

const QuestionCard = props => {
  const { question, recordAnswer, selectedAnswer } = props;
  const { options = [] } = question;

  return (
    <div>
      <ul className={styles.optionsList}>
        {options.map(({ text }, index) => {
          return (
            <li
              key={index} // todo: get rid of index as id
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
