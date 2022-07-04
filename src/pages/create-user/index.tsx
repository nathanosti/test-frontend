import type { NextPage } from "next";
import Head from "next/head";

import { Flex, Text } from "@chakra-ui/react";

import CreateUserForm from "../../components/CreateUserForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ventura Labas - Criar Usuário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        width="100%"
        flexDir="column"
        alignItems="center"
      >
        <Text 
          textAlign="center"
          mt={50}
          mb={100}
          fontWeight="bold"
          fontSize={32}
          casing="capitalize"
        >
          cadastrar novo cliente
        </Text>
        <CreateUserForm />
      </Flex>
    </>
  );
};

export default Home;
