import React from "react";
import { StepProps } from "./App";
export const Submit = ({ navigation }: StepProps): JSX.Element => {
  const { go } = navigation;
  return (
    <div className="ui centered card">
      <div className="content">
        <div className="header mb4">
          Thank you for submitting. <br />
          We will be in touch.
        </div>
        <div className="center aligned description">
          <button className="ui button primary" onClick={() => go("names")}>
            Submit a new form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
