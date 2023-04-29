import React from "react";
import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import CourseBox from "./CourseBox.tsx";
import { useState, useEffect } from "react";
import "./comp.css";

const CoreContainer = (props) => {
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
        <HStack id="semester-list">
          <Stack wrap="wrap" height="100%" paddingTop={20} marginLeft={10}>
            <CourseBox
              courseName="Intro to Comp. Sci."
              courseID="1350"
              type="Core"
            />
            <CourseBox
              courseName="Intro to Comp. Sci."
              courseID="1350"
              type="Core"
            />
            <CourseBox
              courseName="Intro to Comp. Sci."
              courseID="1350"
              type="Core"
            />
          </Stack>
        </HStack>
      </HStack>
    </Stack>
  );
};
export default CoreContainer;
