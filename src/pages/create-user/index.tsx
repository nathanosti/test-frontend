import type { NextPage } from "next";
import Head from "next/head";

import { Flex, Text } from "@chakra-ui/react";

import CreateUserForm from "../../components/CreateUserForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Venture Labs - Criar Usuário</title>
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
          cadastrar novo cliente
        </Text>
        <CreateUserForm />
      </Flex>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
};

export default Home;
