import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import SideBar from "../components/SideBar";

import UserProvider from "../context/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    components: {
      Steps,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <SideBar />
          <Component {...pageProps} />
        </Flex>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
