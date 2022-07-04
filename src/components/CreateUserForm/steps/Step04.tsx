import Link from "next/link";
import { chakra, Flex, Icon, Text, Link as ChakraLink } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import { GiPartyPopper } from "react-icons/gi";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function Step04() {
  return (
    <Flex flexDir="column" alignItems="center">
      <ChakraBox
        animate={{
          scale: [1, 2, 1],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Icon fontSize="80" color="#38A169" as={GiPartyPopper} />
      </ChakraBox>
      <Text mt={14} casing="uppercase" fontWeight="black" fontSize={30}>
        Bem vindo
      </Text>
      <Text mt={4} fontWeight="semi-bold" fontSize={18}>
        Ficamos muito felizes com sua presença!
      </Text>
      <Link href="/list-users">
        <ChakraLink mt={15} textDecoration="none" color="#38A169" >
          Voltar para Home
        </ChakraLink>
      </Link>
    </Flex>
  );
}
