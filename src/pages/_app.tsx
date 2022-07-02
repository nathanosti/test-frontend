import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import SideBar from "../components/SideBar";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SideBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
