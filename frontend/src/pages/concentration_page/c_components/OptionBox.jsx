import react from "react";
import { easeIn, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import "../select.css";
import "../../../App.css"; // Alignment Classes

export const OptionBox = (props) => {
  return (
    <HStack className="option-box">
      <Box className="option-box-innerText">
        <Text as="h1" className="vert_spaceA">
          {props.title}
        </Text>
      </Box>
      <Box></Box>
    </HStack>
  );
};
