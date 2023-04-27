import react from "react";
import { Box, HStack, Heading, Text, Stack } from "@chakra-ui/react";
import bg_img from "../../assets/photos/redblack.jpg";
import ElectiveContainer from "./t_components/ElectiveContainer";
import CoreContainer from "./t_components/CoreContainer";

import "./timeline.css";
import "../../App.css"; // Alignment & Font Classes
import { Course } from "../../interfaces/course";
import React from "react";
import { environment } from "../../environment/environment";
import axios from "axios";

const DataScience = () => {
  // Attributes
  // Functions
  const [courses, setCourseList] = React.useState<Course[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const baseUrl = environment.baseApiUrl + "/course/4"

  React.useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Course[]>(baseUrl);
        console.log(response);
        setCourseList(response.data)
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  // JSX
  return (
    <Box id="data">
      {/* Landing Background */}
      <Box className="page_bg">
        <img src={bg_img}></img>
      </Box>

      {/* Software Contnet */}
      <Box className="content timeline_page">
        {/* Software Title */}
        <HStack className="timeline_title_box">
          <Text as="h1" className="timeline_title">
            Data Science
          </Text>
          <Box id="timeline_decorationB"></Box>
        </HStack>

        {/* Main Display Section */}
        <HStack className="main-display">
          {/* Core Classes Display Section */}
          <HStack className="core-display">
            <Stack className="core-description">
              <Text>Ctlg. Year : XXXX</Text>
              <Text> Total Courses : X</Text>
              <Text> Total Hours : XXX</Text>
              <Text> Semesters : 7</Text>
            </Stack>

            {/* Component */}
            <CoreContainer />
          </HStack>

          {/* Elective Classes Display Section */}
          <Box className="elective-display">
            <Box id="elective-title">
              <Text>Electives & General Education</Text>
            </Box>

            {/* Component */}
            <ElectiveContainer />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default DataScience;
