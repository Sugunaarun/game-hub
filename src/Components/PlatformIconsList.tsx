import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../Hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platforms) => (
        <Icon
          key={platforms.id}
          as={iconMap[platforms.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
