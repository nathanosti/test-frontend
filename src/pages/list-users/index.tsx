import type { NextPage } from "next";
import Head from "next/head";

import { Flex, Text } from "@chakra-ui/react";

import { useUser } from "../../context/userContext";

const Home: NextPage = () => {
  const { usersList } = useUser();
  
  return (
    <>
      <Head>
        <title>Ventura Labas - Criar Usuário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex width="100%" flexDir="column" alignItems="center">
        <Text
          textAlign="center"
          mt={50}
          mb={100}
          fontWeight="bold"
          fontSize={32}
          casing="capitalize"
          color="#38A169"
        >
          lista de todos nossos clientes
        </Text>
      </Flex>
    </>
  );
};

export default Home;
