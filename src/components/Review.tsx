import React from "react";
import { StepProps, Steps } from "./App";

export const Review = ({
  setForm,
  formData,
  navigation,
}: StepProps): JSX.Element => {
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    email,
    phone,
  } = formData;

  const { go } = navigation;

  return (
    <div className="ui centered card">
      <div className="content">
        <h1>Review your information</h1>
        <h4>
          Name{" "}
          <button
            className="mini ui button right floated"
            onClick={() => go(Steps.names)}
          >
            Edit
          </button>
        </h4>
        <div>
          {firstName} {lastName}
        </div>
        <div>Alias: {`${nickName}`}</div>
        <h4>
          Address{" "}
          <button
            className="mini ui button right floated"
            onClick={() => go(Steps.address)}
          >
            Edit
          </button>
        </h4>
        <div>
          {address}
          <br />
          {city}
          <br />
          {state} {zip}
        </div>
        <h4>
          Contact{" "}
          <button
            className="mini ui button right floated"
            onClick={() => go(Steps.contact)}
          >
            Edit
          </button>
        </h4>
        <div>
          Phone: {phone}
          <br />
          E-mail: {email}
        </div>
        <div className="mt4">
          <button
            className="ui button positive"
            onClick={() => go(Steps.submit)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
