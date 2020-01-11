import React from "react";
import styles from "./WizardProgress.module.css";

const WizardProgress = props => {
  const { total, current } = props;
  const percentage = (current / total) * 100;
  return (
    <div className="mt-3">
      <div className={styles.outerBar}>
        <div
          className={styles.innerBar}
          style={{
            width: `${percentage}%`
          }}
        />
      </div>
      <div className="font-weight-bold text-capitalize">
        Questions Completed
      </div>
      <div>
        {current}/{total}
      </div>
    </div>
  );
};

export default WizardProgress;
