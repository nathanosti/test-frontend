import { createContext, useState, useContext } from "react";
import { UserProps } from "../types/UserTypes";

interface userContext {
  createNewUser(formData: UserProps): void;
  usersList: UserProps[];
}

const UserContext = createContext<userContext>({
  createNewUser: () => false,
  usersList: [
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: {
        cep: "",
        state: "",
        city: "",
        district: "",
        street: "",
        houseNumber: "",
      },
      birthDate: "",
      cpf: "",
      salary: "",
    },
  ],
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: any) {
  const [usersList, setUsersList] = useState<UserProps[]>([]);

  function createNewUser(formData: UserProps) {
    console.log("Entrou createNewUser");
    setUsersList([...usersList, formData]);
    console.log({ usersList });
    return;
  }

  return (
    <>
      <UserContext.Provider
        value={{
          createNewUser,
          usersList,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserProvider;
