import react from "react";
import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import "./comp.css";

const CoreContainer = () => {
  // Attributes

  // Functions
  // JSX
  return (
    <Stack id="core-container">
      <Box id="core-title">
        <Text>Core Concentrated Courses</Text>
      </Box>

      {/* Scroll Container */}
      <HStack id="scroll-container">
        {/* Semester List */}
        <HStack id="semester-list"></HStack>
      </HStack>
    </Stack>
  );
};
export default CoreContainer;
