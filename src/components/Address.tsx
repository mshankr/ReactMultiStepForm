import React from "react";
import { FormDataProps, StepProps } from "./App";
import ItemForm from "./ItemForm";

export const Address = ({
  formData,
  setForm,
  navigation,
}: StepProps): JSX.Element => {
  const { address, city, state, zip } = formData;
  const { next } = navigation;

  return (
    <div className="ui centered card">
      <div className="content">
        <h1 className="mb4">Where do you stay?</h1>
        <div className="ui form">
          <ItemForm
            label="Address"
            name={FormDataProps.address}
            value={address}
            onChange={setForm}
          />
          <ItemForm
            label="City"
            name={FormDataProps.city}
            value={city}
            onChange={setForm}
          />
          <ItemForm
            label="State"
            name={FormDataProps.state}
            value={state}
            onChange={setForm}
          />
          <ItemForm
            label="Zipcode"
            name={FormDataProps.zip}
            value={zip}
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
