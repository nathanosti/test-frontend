import { RegisterOptions } from "react-hook-form";

export interface InputsArrProps extends Array<InputsArrProps> {
  inputName: string;
  label: string;
  placeHolder?: string;
  validations: RegisterOptions;
  mask?: string;
}
