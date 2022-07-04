import { BoxProps, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export interface NavItemProps extends FlexProps {
  icon: IconType;
  href: string;
  children: any;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}
