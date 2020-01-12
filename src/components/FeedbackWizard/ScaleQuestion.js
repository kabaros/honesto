import React, { useState } from "react";
import styles from "./ScaleQuestion.module.css";

const QuestionCard = props => {
  const [answer, setAnswer] = useState(-1);
  const { scaleLength = 10, question, recordAnswer, selectedAnswer } = props;
  const { description } = question;

  const style = answer >= 7 ? "good" : answer >= 4 ? "medium" : "bad";

  const blocks = [...Array(scaleLength).keys()];

  const clickScale = val => {
    setAnswer(val);
    recordAnswer(val);
  };

  return (
    <div>
      <p>{description}</p>
      <div className={styles.blocks}>
        {blocks.map((block, index) => {
          if (index <= answer)
            return (
              <div
                onClick={() => clickScale(index)}
                key={index}
                className={`${styles.block} ${styles[style]}`}
              ></div>
            );
          else
            return (
              <div
                onClick={() => clickScale(index)}
                key={index}
                className={`${styles.block} disabled`}
              ></div>
            );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
