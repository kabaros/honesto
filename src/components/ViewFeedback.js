import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../services/api";
import EmployeeList from "./EmployeeList";
import styles from "./ViewFeedback.module.css";

const ShareFeedback = props => {
  let { mode, employeeId } = useParams();
  const title = mode === "received" ? "Team Feeback" : "My Feedback";
  const [employees, setEmployees] = useState([]);
  const [feedbackToShow, setFeedbackToShow] = useState([]);

  useEffect(() => {
    async function fetchFeedback() {
      const employees = await api.getFeedback(mode);
      setEmployees(employees);
    }
    fetchFeedback();
  }, []);

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
            <div className="col-12 col-lg-4">
              <div className="card">
                <ul className="list-group list-group-flush">
                  {employees.map(employee => {
                    return (
                      <li
                        onClick={() => selectEmployee(employee)}
                        className={`list-group-item ${styles.listRow}`}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            src={employee.image}
                            className={styles.employeeImage}
                            alt={employee.name}
                          />
                          <span className={styles.employeeName}>
                            {employee.name}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              {JSON.stringify(feedbackToShow)}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ShareFeedback;
