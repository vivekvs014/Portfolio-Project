import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
  Textarea,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmall] = useMediaQuery("(min-width: 600px)");

  const form = useRef();
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => setUname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const reset = () => {
    setUname("");
    setEmail("");
    setMessage("");
  };
  const sendEmail = (e) => {
    console.log("Submit Button Executing.");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6tfq8nf",
        "template_wsf5m9k",
        form.current,
        "TOS9MBV0m3OXnRXax"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <>
    <Stack id="CONTACT">
      <Text
        textAlign="center"
        fontFamily="Gabar"
        fontSize={isNotSmall ? "40px" : "20px"}
      >
        <h1 style={{textDecoration : "underline"}}>CONTACT US</h1>
      </Text>
      <br />
      <Flex width="100%" direction={isNotSmall ? "row" : "column"}>
        <Box boxSize="xl"width="50%">
          <Image
            alignContent="flex-start"
            src="https://c0.wallpaperflare.com/preview/1013/721/141/contact-details-smartphone-business-contact-us.jpg"
            alt="Dan Abramov"
          />
        </Box>
        <Spacer></Spacer>
        <section>
          <form ref={form} onSubmit={sendEmail}>
            <FormLabel>Your Name</FormLabel>
            <Input
              type="text"
              value={uname}
              onChange={handleInputChange}
              required
              name="user_name"
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmail}
              required
              name="user_email"
            />
            <FormLabel>Your Message</FormLabel>
            <Textarea
              type="text"
              value={message}
              onChange={handleMessage}
              required
              name="message"
            />
            <Button mt={4} colorScheme="teal" onClick={sendEmail} value="Send">
              SEND
            </Button>
          </form>
        </section>
      </Flex>
    </Stack>
    
    </>
  );
};

export default Form;
