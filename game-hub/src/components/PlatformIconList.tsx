import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PS2: FaPlaystation,
    PS1: FaPlaystation,
    PS: FaPlaystation,
    PS3N: FaPlaystation,
    PSPN: FaPlaystation,
    X360: FaXbox,
    XBOX: FaXbox,
    XBGS: FaXbox,
    XONE: FaXbox,
    NES: SiNintendo,
    MAC: FaApple,
    LIN: FaLinux,
    BROW: BsGlobe,
    SNES: SiNintendo,
    PC: FaWindows,
    ANDR: FaAndroid,
  };
  const uniquePlatformsIcons = Array.from(
    new Set(
      platforms.map((p) =>
        iconMap[p.abbreviation] ? iconMap[p.abbreviation] : iconMap["PC"]
      )
    )
  );

  return (
    <HStack spacing={3} marginY={1}>
      {uniquePlatformsIcons.map((icon, index) => (
        <Icon as={icon} key={index} color="gray.500" size="30px" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
