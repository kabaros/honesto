import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/api";
import employeeListStyles from "../EmployeeList.module.css";
import FeedbackDisplay from "./FeedbackDisplay";

const ShareFeedback = props => {
  let { mode, employeeId } = useParams();
  const [employees, setEmployees] = useState([]);
  const [feedbackToShow, setFeedbackToShow] = useState([]);

  const title = mode === "received" ? "Team Feeback" : "My Feedback";
  useEffect(() => {
    async function fetchFeedback(mode) {
      const operation =
        mode === "received" ? api.getReceivedFeedback : api.getGivenFeedback;
      const employees = await operation(mode);
      setEmployees(employees);
      setFeedbackToShow([]);
    }
    fetchFeedback(mode);
  }, [mode]);

  const selectEmployee = employee => {
    const { id } = employee;
    const feedback = employees.find(employee => employee.id === id);
    setFeedbackToShow(feedback);
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
                        onClick={() => selectEmployee(employee)}
                        className={`list-group-item ${employeeListStyles.listRow} ${employeeListStyles.withPointerCursor}`}
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
