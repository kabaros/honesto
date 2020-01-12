import mockEmployeeList from "./mocks/employees";
import mockFeedbackQuestions from "./mocks/feedbackQuestions";
import mockReceivedFeedback from "./mocks/feedbackReceived";

export const getEmployeesForFeedback = () => {
  return new Promise(resolve => {
    const employees = mockEmployeeList.map(employee => {
      return {
        ...employee,
        feedbackGiven: !!feedbackGiven[employee.id]
      };
    });
    setTimeout(() => {
      resolve(employees);
    }, 100);
  });
};
export const getFeedbackQuestions = async employeeId => {
  return new Promise(resolve => {
    setTimeout(() => {
      const employeeInfo = mockEmployeeList.find(
        employee => employee.id === employeeId
      );
      employeeInfo.feedbackGiven = !!feedbackGiven[employeeId];

      resolve({
        employeeInfo,
        questions: mockFeedbackQuestions
      });
    }, 300);
  });
};

const feedbackGiven = {};

export const saveFeedback = async (employeeId, questions) => {
  return new Promise(resolve => {
    setTimeout(() => {
      mockEmployeeList.find(emp => emp.id === employeeId).questions = questions;
      feedbackGiven[employeeId] = true;
      resolve(true);
    }, 100);
  });
};

export const getFeedback = async mode => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (mode === "received") {
        resolve(mockReceivedFeedback);
      } else {
        const employeeFeedback = mockEmployeeList.filter(employee => {
          return feedbackGiven[employee.id];
        });
        resolve(employeeFeedback);
      }
    }, 100);
  });
};
