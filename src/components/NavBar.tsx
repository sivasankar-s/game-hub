import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/rawg.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>RAWG</Text>
    </HStack>
  );
};

export default NavBar;
