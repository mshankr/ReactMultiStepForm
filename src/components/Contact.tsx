import React from "react";
import { FormDataProps, StepProps } from "./App";
import ItemForm from "./ItemForm";

export const Contact = ({
  formData,
  setForm,
  navigation,
}: StepProps): JSX.Element => {
  const { email, phone } = formData;
  const { next } = navigation;

  return (
    <div className="ui centered card">
      <div className="content">
        <h1 className="mb4">How shall we contact you?</h1>
        <div className="ui form">
          <ItemForm
            label="Email"
            name={FormDataProps.email}
            value={email}
            onChange={setForm}
          />
          <ItemForm
            label="Phone"
            name={FormDataProps.phone}
            value={phone}
            onChange={setForm}
          />
          <div className="mt3">
            <button className="ui button primary" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
