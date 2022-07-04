import { InputsArrProps } from "../../types/InputsTypes";

const Step01InputsArr: InputsArrProps[] = [
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
    },
    mask: "(99) 9 9999-9999",
  },
];

export const Step02InputsArr: InputsArrProps[] = [
  {
    inputName: "cep",
    label: "CEP",
    placeHolder: "Digite o CEP",
    validations: {
      required: "Obrigatorio",
    },
    mask: "99999-999",
  },
  {
    inputName: "state",
    label: "Digite o Estado",
    placeHolder: "Estado",
    validations: {
      required: "Obrigatorio",
    },
  },
  {
    inputName: "city",
    label: "Digite a Cidade",
    placeHolder: "Digite a sua cidade",
    validations: {
      required: "Obrigatorio",
    },
  },
  {
    inputName: "district",
    label: "Digite o Bairro",
    placeHolder: "Digite o seu Bairro",
    validations: {
      required: "Obrigatorio",
    },
  },
  {
    inputName: "street",
    label: "Digite a Rua",
    placeHolder: "Digite a rua",
    validations: {
      required: "Obrigatorio",
    },
  },
  {
    inputName: "houseNumber",
    label: "Número da casa",
    placeHolder: "Digite o N° da casa",
    validations: {
      required: "Obrigatorio",
    },
  },
];

export const Step03InputsArr: InputsArrProps[] = [
  {
    inputName: "birthDate",
    label: "Data de Nascimento",
    validations: {
      required: "Obrigatorio",
    },
  },
  {
    inputName: "cpf",
    label: "CPF",
    placeHolder: "Digite seu CPF",
    validations: {
      required: "Obrigatorio",
    },
    mask: "999.999.999-99",
  },
  {
    inputName: "salary",
    label: "Renda mensal",
    placeHolder: "Digite a sua renda mensal",
    validations: {
      required: "Obrigatorio",
    },
  },
];

export { Step01InputsArr };
