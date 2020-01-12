import React from "react";

const AnswerType = props => {
  const { answer } = props;
  if (!answer) return <p className="text-muted">No feedback given.</p>;
  return <p>{answer}</p>;
};

export default AnswerType;
