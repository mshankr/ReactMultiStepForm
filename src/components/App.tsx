import React from "react";
import {
  NavigationProps,
  SetForm,
  useForm,
  useStep,
  UseStepResponse,
} from "react-hooks-helper";
import { Address } from "./Address";
import { Contact } from "./Contact";
import { Names } from "./Names";
import { Review } from "./Review";
import { Submit } from "./Submit";

export enum FormDataProps {
  firstName = "firstName",
  lastName = "lastName",
  nickName = "nickName",
  address = "address",
  city = "city",
  state = "state",
  zip = "zip",
  email = "email",
  phone = "phone",
}

export interface FormData {
  firstName: string;
  lastName: string;
  nickName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
}

export enum Steps {
  names = "names",
  address = "address",
  contact = "contact",
  review = "review",
  submit = "submit",
}

export interface IStep {
  id: string;
}

const steps: IStep[] = [
  { id: Steps.names },
  { id: Steps.address },
  { id: Steps.contact },
  { id: Steps.review },
  { id: Steps.submit },
];

// const steps: string[] = [
//   Steps.names,
//   Steps.address,
//   Steps.contact,
//   Steps.review,
//   Steps.submit,
// ];

export interface StepProps {
  formData: FormData;
  setForm: SetForm;
  navigation: NavigationProps;
}

const defaultData: FormData = {
  firstName: "Jane",
  lastName: "Doe",
  nickName: "Jan",
  address: "200 South Main St",
  city: "Anytown",
  state: "CA",
  zip: "90505",
  email: "email@domain.com",
  phone: "23014563",
};

const App = (): JSX.Element => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ steps });

  const { id } = step as IStep;
  const props: StepProps = { formData, setForm, navigation };

  console.log(step);

  switch (id) {
    case Steps.names:
      return <Names {...props} />;
    case Steps.address:
      return <Address {...props} />;
    case Steps.contact:
      return <Contact {...props} />;
    case Steps.review:
      return <Review {...props} />;
    case Steps.submit:
      return <Submit {...props} />;
    default:
      return <div>default</div>;
  }

  return <div>hi</div>;
};

export default App;
