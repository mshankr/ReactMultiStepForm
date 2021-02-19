import React from "react";
import { FormDataProps, StepProps } from "./App";
import ItemForm from "./ItemForm";

export const Names = ({
  formData,
  setForm,
  navigation,
}: StepProps): JSX.Element => {
  const { firstName, lastName, nickName } = formData;
  const { next } = navigation;

  return (
    <div className="ui centered card">
      <div className="content">
        <h1 className="mb4">What is your name?</h1>
        <div className="ui form">
          <ItemForm
            label="First Name"
            name={FormDataProps.firstName}
            value={firstName}
            onChange={setForm}
          />
          <ItemForm
            label="Last Name"
            name={FormDataProps.lastName}
            value={lastName}
            onChange={setForm}
          />
          <ItemForm
            label="Nickname"
            name={FormDataProps.nickName}
            value={nickName}
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
