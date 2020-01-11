import mockEmployeeList from "./mocks/employees";
import mockFeedbackQuestions from "./mocks/feedbackQuestions";

export const getPendingFeedback = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockEmployeeList);
    }, 1000);
  });
};
export const getFeedbackQuestions = async employeeId => {
  return new Promise(resolve => {
    setTimeout(() => {
      const employeeInfo = mockEmployeeList.find(
        employee => employee.id === employeeId
      );
      resolve({
        employeeInfo,
        questions: mockFeedbackQuestions
      });
    }, 1000);
  });
};

export const saveFeedback = async (employeeId, feedback) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
