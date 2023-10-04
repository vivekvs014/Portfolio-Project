import React from "react";
import {
  Avatar,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Highlight,
  Spacer,
  VStack,
  border,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

function Bottom() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmall] = useMediaQuery("(min-width: 600px)");

  return (
    <VStack width="100%">
      <Flex direction={isNotSmall ? "row" : "column"} width="100%">
        <Center>
          <Button
            colorScheme="teal"
            variant="ghost"
            width="100%"
            height={isNotSmall ? "200px" : "400px"}
            justifyContent="center"
            marginLeft="0px"
            p={0}
            border={isNotSmall ? 0 : "2px"}
          >
            <HStack
              bg="transparent"
              width="100%"
              padding="0px"
              margin="0px"
              borderRadius="30px"
            >
              <Flex
                direction="column"
                spacing="600px"
                width="100%"
                alignSelf="flex-start"
                
              >
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "60px" : "40px"}
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    color={isDark ? "white" : "black"}
                    alignSelf={isNotSmall ? "flex-start" : "center"}
                  >
                    Services
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize="20px"
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    - WEB DEVELOPMENT
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize="20px"
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    - DIGITAL MARKETING
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize="20px"
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    - WEB DESIGN
                  </Heading>
                </Box>
              </Flex>
            </HStack>
          </Button>
        </Center>
        <Center>
          <Button
            colorScheme="teal"
            variant="ghost"
            width="100%"
            height={isNotSmall ? "200px" : "400px"}
            justifyContent="center"
            marginLeft="0px"
            border={isNotSmall ? 0 : "2px"}
          >
            <HStack
              bg="transparent"
              width="100%"
              padding="0px"
              margin="0px"
              borderRadius="30px"
            >
              <Flex
                direction="column"
                spacing="600px"
                width="100%"
                alignSelf="flex-start"
              >
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "60px" : "40px"}
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    color={isDark ? "white" : "black"}
                    alignSelf={isNotSmall ? "flex-start" : "center"}
                  >
                    Contact
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize="20px"
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    New Delhi,
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize="20px"
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    INDIA
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize="20px"
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    Ph : +91 9773866371
                  </Heading>
                </Box>
              </Flex>
            </HStack>
          </Button>
        </Center>
        <Spacer></Spacer>
        <Heading ml="8" size="md" fontWeight="bold" color="cyan.500">
          <Avatar
            name="Dan Abrahmov"
            src="https://i.scdn.co/image/ab676161000051749a0699efb0e3fae93623a9c1"
            boxSize="300px"
          />
          <Highlight
            query="Vivek Sharma"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Vivek Sharma
          </Highlight>
        </Heading>
      </Flex>
    </VStack>
  );
}

export default Bottom;
