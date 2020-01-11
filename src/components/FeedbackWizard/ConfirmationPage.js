import React from "react";
import EmployeeList from "../EmployeeList";

const ConfirmationPage = () => {
  return (
    <div>
      <h1>Thank you for sharing your feedback!</h1>
      <p className="text-muted">
        Continue to give feedback to other team members.
      </p>
      <EmployeeList showCompleted={false} />
    </div>
  );
};

export default ConfirmationPage;
