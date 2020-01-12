const employees = [
  {
    id: 1,
    name: "Andi Ra",
    image: "/images/3.jpeg",
    questions: [
      {
        questionId: 0,
        title: "How much do they embody our core value of ownership?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. ",
        type: "scale",
        answer: 7
      },
      {
        questionId: 1,
        title: "How well did I display Courage?",
        type: "radio",
        answer: 1,
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
        title: "How well did I behave?",
        type: "text",
        answer: "he's ok most of the times"
      },
      {
        questionId: 4,
        title: "Am I humble?",
        type: "text"
      }
    ]
  },
  {
    id: 2,
    name: "Mo Na3im",
    image: "/images/1.jpeg",
    questions: [
      {
        questionId: 0,
        title: "How much do they embody our core value of ownership?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. ",
        type: "scale",
        answer: 3
      },
      {
        questionId: 1,
        title: "How well did I display Courage?",
        type: "radio",
        answer: 2,
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
        type: "text"
      },
      {
        questionId: 4,
        title: "Do I show humility in their work?",
        type: "text",
        answer: "sometimes they come out as a bit of ..."
      },
      {
        questionId: 5,
        title: "Did they show leadership qualities?",
        type: "text"
      }
    ]
  }
];

export default employees;
