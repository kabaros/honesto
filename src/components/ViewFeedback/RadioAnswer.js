import React from "react";
import styles from "./Answers.module.css";

const getStyle = (type, answer) => {
  if (type === "scale") {
    return answer >= 7 ? "good" : answer >= 4 ? "medium" : "bad";
  } else {
    return answer === 2 ? "good" : answer === 1 ? "medium" : "bad";
  }
};
const AnswerType = props => {
  const {
    answer = -1,
    question: { type }
  } = props;
  const scaleLength = type == "scale" ? 10 : 3;

  const style = getStyle(type, answer);

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
