import { InputsArrProps } from "../../types/InputsTypes";

const Step01InputsArr: InputsArrProps = [
  {
    inputName: "firstName",
    label: "Primeiro nome",
    placeHolder: "Nome",
    validations: {
      required: "Obrigatorio",
      minLength: { value: 4, message: "Digite no minimo 4 caracteres" },
    },
  },
  {
    inputName: "lastName",
    label: "Ultimo nome",
    placeHolder: "Sobrenome",
    validations: {
      required: "Obrigatorio",
      minLength: { value: 4, message: "Digite no minimo 4 caracteres" },
    },
  },
  {
    inputName: "email",
    label: "E-Mail",
    placeHolder: "E-Mail",
    validations: {
      required: "Obrigatorio",
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Digite um E-Mail válido",
      },
    },
  },
  {
    inputName: "phone",
    label: "Celular",
    placeHolder: "Celular",
    validations: {
      required: "Obrigatorio",
      maxLength: { value: 16, message: "Digite no máximo 14 caracteres" },
    },
    mask: "(99) 9 9999-9999",
  },
];

export { Step01InputsArr };
