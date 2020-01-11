const mockFeedbackQuestions = {
  employeeInfo: {
    name: "Chris John"
  },
  questions: [
    {
      questionId: 1,
      title: "How well did I display Courage?",
      type: "radio",
      options: [
        {
          text:
            " Please Improve You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t. "
        },
        {
          text:
            "You Were Good You sometimes participate in meetings but you feel that they don’t always bring up important things when they should. "
        },
        {
          text:
            "You Were Great I and others can count on your courage to help the team do what is right."
        }
      ]
    },
    {
      questionId: 2,
      title: "How well did did you behave?",
      type: "text",
      options: [
        {
          text: "Bad"
        },
        {
          text: "Good"
        },
        {
          text: "Great"
        }
      ]
    }
  ]
};

export const getFeedbackQuestions = async feedbackId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockFeedbackQuestions);
    }, 1000);
  });
};