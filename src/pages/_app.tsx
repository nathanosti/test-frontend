import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    components: {
      Steps,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <SideBar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
