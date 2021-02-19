import React from "react";
import { SetForm } from "react-hooks-helper";

interface ItemFormProps {
  label: string;
  type?: string;
  //   [key: string]: any;
  name: string;
  value: string;
  onChange: SetForm;
}

const ItemForm = ({
  label,
  type = "text",
  ...otherProps
}: ItemFormProps): JSX.Element => (
  <div className="field">
    {type === "text" ? (
      <>
        <label>{label}</label>
        <input type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label />
        <input type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

export default ItemForm;
