import React from "react";

const QuestionCard = props => {
  const { question } = props;
  return (
    <div>
      <div className="form-group">
        <textarea className="form-control" rows="6"></textarea>
      </div>
    </div>
  );
};

export default QuestionCard;
