import "./App.css";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Highlight } from "@chakra-ui/react";
import Header from "./Pages/Header";
import Social from "./Pages/Social";
import Profile from "./Pages/Profile";
import WorkExperience from "./Pages/WorkExperience";
import Footer from "./Pages/Footer";
import Bottom from "./Pages/Bottom";
import Form from "./Pages/Form";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack padding="5" id="TOP">
      <Flex width="100%">
        <Heading ml="8" size="md" fontWeight="bold" color="cyan.500">
          <Avatar
            name="Dan Abrahmov"
            src="https://i.scdn.co/image/ab676161000051749a0699efb0e3fae93623a9c1"
          />
          <Highlight
            query="Vivek Sharma"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Vivek Sharma
          </Highlight>
        </Heading>
        <Spacer></Spacer>
        <AnchorLink href="#HOME">
        <Button
          ml={8}
          icon={<FaInstagram />}
          isRound="true"
          backgroundColor = "transparent"
        >HOME</Button></AnchorLink>
        <AnchorLink href="#SKILLS">
        <Button
          ml={8}
          isRound="true"
          backgroundColor = "transparent"
        >SKILLS</Button></AnchorLink>

        <AnchorLink href="#EXPERIENCE">
        <Button
          ml={8}
          isRound="true"
          backgroundColor = "transparent"
        >EXPERIENCE</Button></AnchorLink>
        <AnchorLink href="#CONTACT">
        <Button
          ml={8}
          isRound="true"
          backgroundColor = "transparent"
        >CONTACT</Button></AnchorLink>
        <Spacer></Spacer>
        <IconButton
          ml={8}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() => window.open("https://www.instagram.com/_vixxk_/")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/vivek-sharma-117b671b1/")
          }
        ></IconButton>
        <IconButton
          ml={8}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/vivekvs014")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
      <WorkExperience></WorkExperience>
      <Form></Form>
      <Bottom></Bottom>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
