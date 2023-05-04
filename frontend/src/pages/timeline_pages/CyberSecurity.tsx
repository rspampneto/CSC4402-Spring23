import react from "react";
import { Box, HStack, Heading, Text, Stack, Button } from "@chakra-ui/react";
import bg_img from "../../assets/photos/greenblack.jpg";
import ElectiveContainer from "./t_components/ElectiveContainer";
import CoreContainer from "./t_components/CoreContainer";
import { Link } from "react-router-dom";

import "./timeline.css";
import "../../App.css"; // Alignment & Font Classes
import { Course, CourseDB } from "../../interfaces/course";
import React from "react";
import { environment } from "../../environment/environment";
import axios from "axios";
import { Section } from "../../interfaces/section";
import { BsChevronDoubleLeft } from "react-icons/bs";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import CourseBox from "./t_components/CourseBox.tsx";

const CyberSecurity = () => {
  // Attributes
  // Functions
  const [courses, setCourseList] = React.useState<Course[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const baseUrl = environment.baseApiUrl + "/course/2";

  React.useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        // grab the base CS courses and concentration-specific courses
        const response = await axios.get<CourseDB[]>(baseUrl);
        console.log(response.data);
        // new var to store courses and their respective sections
        let coursesWSec: Course[] = [];

        // for each course retrieved from API
        for (const element of response.data) {
          // grab their respective sections
          await axios
            .get<Section[]>(environment.baseApiUrl + `/section/${element.id}`)
            .then((response) => {
              // create a Course type object with those sections
              let newCourse: Course = {
                ...element,
                sections: response.data,
              };
              // push to Course array
              coursesWSec.push(newCourse);
            });
        }
        console.log(coursesWSec);
        // set course state
        setCourseList(coursesWSec);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  const renderCourses = (courses: Course[]) => {
    return courses.map(course => 
      <CourseBox
      courseName={course.title}
      courseID={course.id}
      courseCredit={course.credit}
      type="Core"
      sections={course.sections}
    />);
  }

  // JSX
  return (
    <Box id="software">
      {/* Landing Background */}
      <Box className="page_bg">
        <img src={bg_img}></img>
      </Box>

      {/* Software Content */}
      <Box className="content timeline_page">
        {/* Software Title */}
        <HStack className="timeline_title_box">
          <Text as="h1" className="timeline_title">
            Software Development
          </Text>
          <Box id="timeline_decorationA"></Box>
        </HStack>

        {/* Back Button */}
        <Link to="/select">
          <Button className="back">
            <HStack>
              <BsChevronDoubleLeft className="back-icon" />
              <Text as="h1">Prev. Page</Text>
            </HStack>
          </Button>
        </Link>

        {/* Main Display Section */}
        <HStack className="main-display">
          
          {/* Core Classes Display Section */}
          <HStack className="core-display">
            {/* Component */}
            <Stack id="core-container">
              <Box id="core-title">
                <Text>Core Concentrated Courses</Text>
              </Box>

              {/* Scroll Container */}
              <HStack id="scroll-container">
                {/* Semester List */}
                <HStack id="semester-list">
                  <Stack wrap="wrap" height="100%" paddingTop={20} marginLeft={10}>
                  {loading ? "load" : renderCourses(courses)}

                  </Stack>
                </HStack>
              </HStack>
            </Stack>
          </HStack>

          {/* Elective Classes Display Section */}
          <Stack className="elective-display">
            <Box id="elective-title">
              <Text>Electives & General Education</Text>
            </Box>

            {/* Component */}
            <ElectiveContainer />
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default CyberSecurity;
