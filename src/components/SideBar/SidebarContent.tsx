import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { BiUserPlus } from "react-icons/bi";

import NavItem from "./NavItem";

import {
  LinkItemProps,
  SidebarProps,
} from "../../types/SideBarTypes";


const LinkItems: Array<LinkItemProps> = [
  { name: "Novo Cliente", icon: BiUserPlus },
  { name: "Lista de Clientes", icon: FiUsers },
];

export default function SidebarContent ({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};