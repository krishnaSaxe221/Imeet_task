import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Krishna Saxena";
const bio1 = "A Web developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="krishna!"
        src="../images/my-profile.jpg"
      />
      <Heading as="h1" size="sm">
        {greeting}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
