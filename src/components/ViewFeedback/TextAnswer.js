import React from "react";

const AnswerType = props => {
  const { answer = "No feedback given." } = props;
  return <p>{answer}</p>;
};

export default AnswerType;
