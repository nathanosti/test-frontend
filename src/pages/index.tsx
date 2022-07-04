import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { chakra, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import UsersList from "../components/UsersList";

import { useUser } from "../context/userContext";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Home: NextPage = () => {
  const { usersList } = useUser();
  return (
    <>
      <Head>
        <title>Venture Labs - Criar Usuário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        width="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        {usersList.length ? (
          <>
            <Text
              textAlign="center"
              margin="50px auto 100px auto"
              fontWeight="bold"
              fontSize={32}
              casing="capitalize"
              color="#38A169"
            >
              lista de todos nossos clientes
            </Text>
            <UsersList />
          </>
        ) : (
          <>
            <Text fontWeight="black" fontSize={50} mt={["50px", "300px"]}>
              OOOPS!
            </Text>
            <Text fontWeight="semibold" width={[260, 450]} textAlign="center">
              Não conseguimos localizar nenhum usuário cadastrado ainda, que tal
              você mudar isso?
            </Text>
            <ChakraBox
              mt="30px"
              animate={{
                scale: [1, 1.5, 1],
              }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Link href="/create-user">
                <ChakraLink
                  px={3}
                  py={1.5}
                  borderRadius={10}
                  background="#38A169"
                  color="#fff"
                  _hover={{
                    background: "#38A169",
                  }}
                >
                  Vamos Lá!
                </ChakraLink>
              </Link>
            </ChakraBox>
          </>
        )}
      </Flex>
    </>
  );
};

export default Home;
