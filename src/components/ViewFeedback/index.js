import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as api from "../../services/api";
import employeeListStyles from "../EmployeeList.module.css";
import FeedbackDisplay from "./FeedbackDisplay";

const isFeedbackReceivd = mode => mode === "received";

const ShareFeedback = props => {
  const { mode, employeeId } = useParams();
  const history = useHistory();
  const [employees, setEmployees] = useState([]);
  const [feedbackToShow, setFeedbackToShow] = useState([]);

  const title = isFeedbackReceivd(mode) ? "Team Feeback" : "My Feedback";

  useEffect(() => {
    async function fetchFeedback(mode) {
      const operation = isFeedbackReceivd(mode)
        ? api.getReceivedFeedback
        : api.getGivenFeedback;
      const employees = await operation(mode);
      setEmployees(employees);
    }
    fetchFeedback(mode);
  }, [mode]);

  useEffect(
    employeeId => {
      selectEmployee(employeeId);
    },
    [employeeId, employees]
  );

  const selectEmployee = (id = employeeId) => {
    const feedback =
      employees.find(employee => employee.id === Number(id)) || employees[0];
    setFeedbackToShow(feedback);
  };

  const getSelectedStyle = id => {
    return id === Number(employeeId) ? employeeListStyles.selectedRow : "";
  };

  const goToEmployee = id => {
    history.push(`/view-feedback/${mode}/${id}`);
  };
  return (
    <div>
      <h1>{title}</h1>
      {
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 px-0">
              <div className="card rounded-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item disabled" aria-disabled="true">
                    Feedback {mode}
                  </li>
                  {employees.length == 0 && (
                    <li
                      className={`list-group-item ${employeeListStyles.listRow}`}
                    >
                      No feedback {mode} yet.
                    </li>
                  )}
                  {employees.map((employee, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => goToEmployee(employee.id)}
                        className={`list-group-item ${
                          employeeListStyles.listRow
                        } ${
                          employeeListStyles.withPointerCursor
                        } ${getSelectedStyle(employee.id)}`}
                      >
                        <div className={employeeListStyles.imageContainer}>
                          <img
                            src={employee.image}
                            className={employeeListStyles.employeeImage}
                            alt={employee.name}
                          />
                          <span className={employeeListStyles.employeeName}>
                            {employee.name}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-8 px-0">
              {!!employees.length && (
                <FeedbackDisplay feedback={feedbackToShow} />
              )}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ShareFeedback;
