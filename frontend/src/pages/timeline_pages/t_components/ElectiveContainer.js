import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import CourseBox from "./CourseBox.tsx";
import "./comp.css";

const ElectiveContainer = () => {
  // Attributes
  // Functions
  // JSX
  return (
    // Elective Container
    <Stack id="elective-container">
      {/* Elective List */}
      <Stack id="elective-list">
        <Stack margin={5}>
          <CourseBox
            courseName="English"
            courseID="1200"
            type="General Education"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default ElectiveContainer;
