import React, { useState, useEffect } from "react";
import * as api from "../../services/api";
import RadioQuestion from "./RadioQuestion";
import TextQuestion from "./TextQuestion";
import styles from "./WizardContainer.module.css";
import { useHistory, useRouteMatch } from "react-router-dom";

const WizardContainer = props => {
  const {
    params: { employeeId }
  } = useRouteMatch();
  const history = useHistory();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [employeeInfo, setEmployeeInfo] = useState({});

  useEffect(() => {
    async function fetchQuestions() {
      const feedbackForm = await api.getFeedbackQuestions(Number(employeeId));
      const { questions, employeeInfo } = feedbackForm;

      setQuestions(questions);
      setEmployeeInfo(employeeInfo);
    }
    fetchQuestions();
  }, [employeeId]);

  if (!questions.length) return <div>Loading Questions</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const { type, title } = currentQuestion;

  const isFirstQuestion = currentQuestionIndex === 0;

  const recordAnswer = question => answer => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answer = answer;
    setQuestions(updatedQuestions);
  };

  const goNextQuestion = () => {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      saveFeedback();
    }
  };

  const saveFeedback = async () => {
    await api.saveFeedback(employeeId, questions);
    history.push("/confirmation");
  };

  const QuestionCard = type === "radio" ? RadioQuestion : TextQuestion;
  return (
    <div>
      {questions && (
        <div className={styles.questionWrapper}>
          <div className={styles.questionHeader}>
            <div className="float-right">
              <img
                src={employeeInfo.image}
                className={styles.employeeImage}
                alt={employeeInfo.name}
              />
            </div>
            <h1>{title}</h1>
            <p className="text-muted">
              Share your Feedback for {employeeInfo.name}
            </p>
          </div>
          <div className={styles.questionCardWrapper}>
            <QuestionCard
              recordAnswer={recordAnswer(currentQuestion)}
              selectedAnswer={currentQuestion.answer}
              question={currentQuestion}
            />
          </div>
        </div>
      )}

      <button
        type="button"
        disabled={isFirstQuestion}
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        className="btn btn-outline-secondary btn-lg float-left"
      >
        Previous
      </button>

      <button
        type="button"
        onClick={goNextQuestion}
        className="btn btn-outline-secondary btn-lg float-right"
      >
        Next
      </button>
    </div>
  );
};

export default WizardContainer;
