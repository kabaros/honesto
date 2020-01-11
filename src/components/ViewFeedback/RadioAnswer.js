import React from "react";
import styles from "./Answers.module.css";

const AnswerType = props => {
  const { answer = -1, scaleLength = 3 } = props;
  const style = answer === 2 ? "good" : answer === 1 ? "medium" : "bad";

  const blocks = [...Array(scaleLength).keys()];

  return (
    <div className={styles.blocks}>
      {blocks.map((block, index) => {
        if (index <= answer)
          return (
            <div
              key={index}
              className={`${styles.block} ${styles[style]}`}
            ></div>
          );
        else
          return <div key={index} className={`${styles.block} disabled`}></div>;
      })}
    </div>
  );
};

export default AnswerType;
