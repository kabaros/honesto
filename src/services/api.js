import mockEmployeeList from "./mocks/employees";
import mockFeedbackQuestions from "./mocks/feedbackQuestions";
import mockReceivedFeedback from "./mocks/feedbackReceived";

export const getEmployeesForFeedback = () => {
  return new Promise(resolve => {
    const employees = mockEmployeeList.map(employee => {
      return {
        ...employee
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
      resolve({
        employeeInfo,
        // ToDo: this works for this exercise, but in real life would probably use _.deepClone
        questions: JSON.parse(JSON.stringify(mockFeedbackQuestions))
      });
    }, 300);
  });
};

export const saveFeedback = async (employeeId, questions) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const employee = mockEmployeeList.find(emp => emp.id === employeeId);
      employee.questions = questions;
      employee.feedbackGiven = true;
      resolve(true);
    }, 100);
  });
};

export const getReceivedFeedback = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockReceivedFeedback);
    }, 100);
  });
};

export const getGivenFeedback = async mode => {
  return new Promise(resolve => {
    setTimeout(() => {
      const employeeFeedback = mockEmployeeList.filter(employee => {
        return employee.feedbackGiven;
      });
      resolve(employeeFeedback);
    }, 100);
  });
};
