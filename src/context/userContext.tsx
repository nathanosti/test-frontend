import { createContext, useState, useContext, useEffect } from "react";
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
    setUsersList([...usersList, formData]);
    return;
  }

  useEffect(() => {
    console.log({ usersList });
  }, [usersList]);

  return (
    <>
      <UserContext.Provider
        value={{
          usersList,
          createNewUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserProvider;
