import {
  Box,
  Circle,
  Flex,
  Stack,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button} from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/react'


function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmall] = useMediaQuery("(min-width: 600px)");
  return (
    <Stack id="HOME">
      <Circle
        position="absolute"
        bg="blueviolet"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmall ? "row" : "column"}
        spacing="200px"
        p={isNotSmall ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmall ? "0" : "16"} align="flex-start">
          <Text fontSize="40px" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="70px"
            fontWeight="semibold"
            fontFamily="Gabar"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Vivek Sharma
          </Text>
          <Text
            fontSize="30px"
            color={isDark ? "green.600" : "cyan.400"}
            fontFamily="Satisfy"
          >
            WEB DEVELOPER
          </Text>
          <Button colorScheme="teal" variant="solid" onClick={()=>window.open("https://drive.google.com/file/d/1oYtbbza_lHi37hazxvsMLtXZ3TrUXZ9p/view?usp=sharing")}>
            HIRE ME
          </Button>
        </Box>
        <Avatar name='Dan Abrahmov' src='https://i.scdn.co/image/ab676161000051749a0699efb0e3fae93623a9c1' alignSelf="center" mt={isNotSmall ? "0" : "12"} mb={isNotSmall ? "0" : "12"} backgroundColor='transparent' boxShadow="lg" boxSize="300px"/>
      </Flex>
    </Stack>
  );
}

export default Header;
