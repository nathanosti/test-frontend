export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    cep: string;
    state: string;
    city: string;
    district: string;
    street: string;
    houseNumber: string;
  };
  birthDate: string;
  cpf: string;
  salary: string;
}
