import React from "react";

const QuestionCard = props => {
  const { recordAnswer, selectedAnswer } = props;
  return (
    <div>
      <div className="form-group">
        <textarea
          value={selectedAnswer}
          onChange={ev => recordAnswer(ev.target.value)}
          className="form-control"
          rows="13"
        ></textarea>
      </div>
    </div>
  );
};

export default QuestionCard;
