import {
  Box,
  Flex,
  HStack,
  useColorMode,
  useMediaQuery,
  Text,
  Spacer,
  Heading,
  Icon,
  VStack,
  Badge,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FaAndroid } from "react-icons/fa";

function Profile() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmall] = useMediaQuery("(min-width: 600px)");
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "I have learnt React Js and developed a few Web Apps using React Js",
  };
  return (
    <>
      <Box width="90%" marginLeft="0px" paddingLeft="0px" id="SKILLS">
        <HStack
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          width="100%"
          padding="40px"
          margin="40px"
          borderRadius="30px"
        >
          <Flex
            direction={isNotSmall ? "row" : "column"}
            spacing="600px"
            p={isNotSmall ? "32" : "0"}
            alignSelf="flex-start"
            width="100%"
            paddingLeft="40px"
            paddingTop="40px"
          >
            <Box mt={isNotSmall ? "0" : "16"} align="flex-start">
              <Heading
                fontSize="40px"
                size="md"
                fontWeight="bold"
                color="yellow"
                ml="0"
              >
                Skills
              </Heading>

              <Text
                fontSize="20px"
                fontWeight="semibold"
                fontFamily="sans-serif"
                color={isDark ? "white" : "black"}
              >
                Allow me to present my skills, where I'll show you
                a
              </Text>
              <Text
                fontSize="20px"
                fontWeight="semibold"
                fontFamily="sans-serif"
                color={isDark ? "white" : "black"}
              >
                comprehensive account of my latest projects, leaving no room for
                mistaken ideas.
              </Text>
              <br />
              <Flex direction={isNotSmall ? "row" : "column"}>
                <Box
                  maxW="sm"
                  borderRadius="lg"
                  overflow="hidden"
                  backgroundColor="ghostwhite"
                  border="2px"
                >
                  <Image
                    src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1279225/retina_1708x683_0521-react-redux-and-immutablejs-Waldek_Newsletter-993b50f4ae56e9ee6e024a309c23a6c4.png"
                    alt={property.imageAlt}
                  />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        Skills
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        MERN STACK &bull; React Js, Express Js, Node Js, MongoDb
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      color="black"
                    >
                      {property.title}
                    </Box>
                  </Box>
                </Box>
                <Spacer></Spacer>
                <Box
                  maxW="sm"
                  borderRadius="lg"
                  overflow="hidden"
                  backgroundColor="ghostwhite"
                  border="2px"
                >
                  <Image
                    src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg"
                    alt={property.imageAlt}
                  />

                  <Box p="6">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      Skills
                    </Badge>
                    <Box display="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        WEB DEVELOPMENT &bull; HTML, CSS, JAVASCRIPT
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      color="black"
                    >
                      Other Skills are : Html, CSS, Javascript, Etc
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Spacer></Spacer>
            <Icon
              as={FaAndroid}
              boxSize="200px"
              paddingLeft="4"
              paddingTop="2"
            />
          </Flex>
        </HStack>
      </Box>
    </>
  );
}

export default Profile;
