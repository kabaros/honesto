import React, { useEffect, useState } from "react";
import * as api from "../services/api";
import styles from "./EmployeeList.module.css";
import { useHistory } from "react-router-dom";

const EmployeeList = props => {
  const { showCompleted = true, employeesList } = props;
  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchPendingFeedback() {
      const employees = await api.getEmployeesForFeedback();
      setEmployees(employees);
    }
    fetchPendingFeedback();
  }, []);

  const goToEmployee = employeeId => {
    history.push(`/share-feedback/employee/${employeeId}`);
  };

  const goToViewFeedback = employeeId => {
    history.push(`/view-feedback/given/${employeeId}`);
  };
  return (
    <div>
      <div className="card">
        <ul className="list-group list-group-flush">
          {employees.map(employee => {
            const { feedbackGiven = false } = employee;
            if (!showCompleted && feedbackGiven) return null;
            return (
              <li className={`list-group-item ${styles.listRow}`}>
                <div className={styles.imageContainer}>
                  <img
                    src={employee.image}
                    className={styles.employeeImage}
                    alt={employee.name}
                  />
                  <span className={styles.employeeName}>{employee.name}</span>
                </div>
                {employee.feedbackGiven && showCompleted && (
                  <button
                    onClick={() => goToViewFeedback(employee.id)}
                    type="button"
                    className={`btn btn-success ${styles.button} ${styles.btnViewFeedback}`}
                  >
                    View Feedback
                  </button>
                )}
                {!employee.feedbackGiven && (
                  <button
                    onClick={() => goToEmployee(employee.id)}
                    type="button"
                    className={`btn btn-success ${styles.button} ${styles.btnGiveFeedback}`}
                  >
                    Fill out
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;
