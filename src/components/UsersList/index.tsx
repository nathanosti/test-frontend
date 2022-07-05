import {
  Flex,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useUser } from "../../context/userContext";

import { GrDocumentUser } from "react-icons/gr";

export default function UsersList() {
  const { usersList } = useUser();

  return (
    <>
      <Accordion allowToggle>
        {usersList?.map((user) => (
          <>
            <AccordionItem>
              <AccordionButton>
                <Flex
                  key={user.cpf}
                  alignItems="center"
                  justifyContent="space-between"
                  p={10}
                  width={["310px", "800px"]}
                  borderRadius={10}
                  border="1px solid #1e3a4330"
                  flex="1"
                >
                  <Text fontSize={20} fontWeight="semibold" color="#38A169">
                    {user.firstName}
                    &nbsp;
                    {user.lastName}
                  </Text>

                  <Icon
                    as={GrDocumentUser}
                    fontSize="40"
                    color="#38A169"
                    cursor="pointer"
                  />
                </Flex>
              </AccordionButton>
              <AccordionPanel>
                <Flex
                  key={user.cpf}
                  flexDir={["column", "row"]}
                  alignItems="flex-start"
                  justifyContent="center"
                  p={10}
                  borderRadius={10}
                  border="1px solid #1e3a4330"
                  boxShadow="xl"
                >
                  <Box
                    id="personalData"
                    width="100%"
                    display="flex"
                    flexDir="column"
                  >
                    <Text
                      fontSize={26}
                      textAlign={["center", "left"]}
                      fontWeight="bold"
                    >
                      Dados Pessoais:
                    </Text>

                    <Flex
                      justifyContent="space-between"
                      flexDir="column"
                      width="100%"
                    >
                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">Data de nascimento:</Text>
                        <Text>&nbsp; {user.birthDate}</Text>
                      </Box>

                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">CPF:</Text>
                        <Text>&nbsp; {user.cpf}</Text>
                      </Box>

                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">Celular:</Text>
                        <Text>&nbsp; {user.phone}</Text>
                      </Box>

                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">E-Mail:</Text>
                        <Text>&nbsp; {user.email}</Text>
                      </Box>

                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">Salário:</Text>
                        <Text>
                          &nbsp;{" "}
                          {Number(user.salary).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    id="addres"
                    width="100%"
                    display="flex"
                    flexDir="column"
                    alignItems="flex-start"
                    justifyContent="center"
                  >
                    <Text
                      fontSize={26}
                      margin={["0 auto", "0"]}
                      fontWeight="bold"
                    >
                      Endereço:
                    </Text>

                    <Flex
                      justifyContent="space-between"
                      flexDir="column"
                      width="100%"
                    >
                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">Estado:</Text>
                        <Text>&nbsp; {user.address.state}</Text>
                      </Box>

                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">Cidade:</Text>
                        <Text>&nbsp; {user.address.city}</Text>
                      </Box>

                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">Bairro:</Text>
                        <Text>&nbsp; {user.address.district}</Text>
                      </Box>

                      <Box
                        display="flex"
                        flexDir={["column", "row"]}
                        alignItems="center"
                      >
                        <Text fontWeight="medium">Rua:</Text>
                        <Text>
                          &nbsp; {user.address.street}{" "}
                          {user.address.houseNumber}°
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </>
  );
}
