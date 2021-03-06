const mockFeedbackQuestions = [
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
    title: "Any extra feedback on their display of courage?",
    type: "text"
  },
  {
    questionId: 3,
    title: "How much do they embody our core value of ownership?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. ",
    type: "scale"
  },
  {
    questionId: 4,
    title: "Are they humble?",
    type: "radio",
    options: [
      {
        text: "Not really"
      },
      {
        text: "Humble most of the time"
      },
      {
        text: "Embodies this core value"
      }
    ]
  },
  {
    questionId: 5,
    title: "What is your overall view of this person?",
    type: "text"
  }
];

export default mockFeedbackQuestions;
