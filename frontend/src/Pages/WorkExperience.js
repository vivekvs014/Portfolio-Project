import {
  Box,
  Flex,
  Heading,
  VStack,
  useColorMode,
  useMediaQuery,
  Text,
  Center,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

function WorkExperience() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmall] = useMediaQuery("(min-width: 600px)");

  return (
    <VStack padding="0px" width="100%" id="EXPERIENCE">
      <Flex
        direction="column"
        ml={8}
        p={isNotSmall ? "32" : "0"}
        marginTop="0px"
        width="100%"
        paddingTop="100px"
      >
        <Box width="100%" bg="transparent" alignContent="center" spacing="30px">
          <Center>
            <Heading mt="5px" fontSize={isNotSmall ? "70px" : "30px"} style={{textDecoration : "underline"}}> 
              My Work Experience
            </Heading>
          </Center>
          <Spacer></Spacer>
          <Center paddingTop="40px">
            <Text
              width="80%"
              fontSize={isNotSmall ? "20px" : "10px"}
              fontWeight="semibold"
              textAlign="center"
            >
              Allow me to share my journey and professional expertise. Together,
              we'll debunk the myths and provide you with a complete overview of
              my career, skills, and accomplishments.
            </Text>
          </Center>
        </Box>
      </Flex>
      <Flex
        direction="column"
        ml={8}
        p={isNotSmall ? "32" : "0"}
        marginTop="0px"
        width="100%"
        paddingTop="100px"
      >
        <Center>
          <Button
            colorScheme="teal"
            variant="outline"
            width="100%"
            height={isNotSmall ? "200px" : "400px"}
            justifyContent="center"
            marginLeft="0px"
          >
            <HStack
              bg="transparent"
              width="100%"
              padding="0px"
              margin="0px"
              borderRadius="30px"
            >
              <Flex
                direction={isNotSmall ? "row" : "column"}
                spacing="600px"
                width="100%"
                alignSelf="flex-start"
              >
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    alignSelf={isNotSmall ? "flex-start" : "center"}
                  >
                    2021-2022
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    Sangfroid Services & Technologies LLP
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    WEB DEVELOPER INTERN
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    Delhi, India
                  </Heading>
                </Box>
              </Flex>
            </HStack>
          </Button>
        </Center>
        <Spacer><br/></Spacer>
        <Center>
          <Button
            colorScheme="teal"
            variant="outline"
            width="100%"
            height={isNotSmall ? "200px" : "400px"}
            justifyContent="center"
            marginLeft="0px"
          >
            <HStack
              bg="transparent"
              width="100%"
              padding="0px"
              margin="0px"
              borderRadius="30px"
            >
              <Flex
                direction={isNotSmall ? "row" : "column"}
                spacing="600px"
                width="100%"
                alignSelf="flex-start"
              >
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    alignSelf={isNotSmall ? "flex-start" : "center"}
                  >
                    2019-2019
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
INGLU
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    WEB DEVELOPER INTERN
                  </Heading>
                </Box>
                <Spacer></Spacer>
                <Box
                  mt={isNotSmall ? "0" : "16"}
                  alignSelf={isNotSmall ? "flex-start" : "center"}
                >
                  <Heading
                    fontSize={isNotSmall ? "20px" : "10px"}
                    size="md"
                    fontWeight="bold"
                    color={isDark ? "white" : "black"}
                    ml="0"
                  >
                    Delhi, India
                  </Heading>
                </Box>
              </Flex>
            </HStack>
          </Button>
        </Center>
      </Flex>
    </VStack>
  );
}

export default WorkExperience;
