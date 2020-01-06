import React from "react";
import { useParams } from "react-router-dom";

const ShareFeedback = props => {
  let { mode } = useParams();
  const title = mode === "received" ? "Team Feeback" : "My Feedback";

  return (
    <div>
      <h1>{title}</h1>
      <h2>Users list</h2>
      <p>Feedback to show</p>
    </div>
  );
};

export default ShareFeedback;
