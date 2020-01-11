import React, { useEffect, useState } from "react";
import * as api from "../services/api";
import styles from "./EmployeeList.module.css";
import { withRouter } from "react-router-dom";

const EmployeeList = props => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchPendingFeedback() {
      const employees = await api.getPendingFeedback();
      setEmployees(employees);
    }
    fetchPendingFeedback();
  }, []);

  const goToEmployee = employeeId => {
    props.history.push(`/share-feedback/employee/${employeeId}`);
  };
  return (
    <div>
      <div className="card">
        <ul className="list-group list-group-flush">
          {employees.map(employee => {
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
                <button
                  onClick={() => goToEmployee(employee.id)}
                  type="button"
                  class={`btn ${styles.button}`}
                >
                  Fill out
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(EmployeeList);
