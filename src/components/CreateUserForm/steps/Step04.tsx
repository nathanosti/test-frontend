import Link from "next/link";
import { Flex, Icon, Text, Link as ChakraLink } from "@chakra-ui/react";

import { GiPartyPopper } from "react-icons/gi";

export default function Step04() {
  return (
    <Flex flexDir="column" alignItems="center">
      <Icon fontSize="80" color="#38A169" as={GiPartyPopper} />
      <Text mt={14} casing="uppercase" fontWeight="black" fontSize={30}>
        Bem vindo
      </Text>
      <Text mt={4} fontWeight="semi-bold" fontSize={18}>
        Ficamos muito felizes com sua presença!
      </Text>
      <Link href="/">
        <ChakraLink mt={15} textDecoration="none" color="#38A169">
          Ver novo usuário
        </ChakraLink>
      </Link>
    </Flex>
  );
}
