import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex flexDir={{ base: 'column', md: 'row' }}>
        <SideBar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
