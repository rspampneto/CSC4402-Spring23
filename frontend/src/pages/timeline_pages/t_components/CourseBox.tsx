import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import "./comp.css";
import React from "react";

import "./comp.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Section } from "../../../interfaces/section";

const CourseBox = (props) => {
  // Attributes
  // Functions
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal Logic

  const renderSections = (sections: Section[]) => {
    return sections.map((section) => (
      <Stack>
        <Box textAlign="center">
          <Text>Section {section.sec_id}</Text>
          <Text>Days: {section.days}</Text>
          <Text>Start time: {section.start_time}</Text>
          <Text>End time: {section.end_time}</Text>
        </Box>
      </Stack>
    ));
  };

  // JSX
  return (
    <>
      <Button onClick={onOpen} color="white" id="course-button" width="200px">
        <Stack id="course">
          {/* Core Label */}
          <Box className="core-label">
            <Text as="h3">{props.type}</Text>
          </Box>

          {/* Course Layout */}
          <Stack backgroundColor={props.con_id == 0 ? "" : "blue"}>
            <HStack gap="85%">
              <Box></Box>
            </HStack>

            <Box>
              <Text>{props.courseName}</Text>
            </Box>

            <HStack gap="32%">
              <Box></Box>
              <Box id="course-num-box">
                <Text>{props.courseID}</Text>
              </Box>
              <Box>
                <Text>{props.courseCredit}</Text>
              </Box>
            </HStack>
          </Stack>
        </Stack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} id="modal">
        {/* <ModalOverlay /> */}
        <ModalContent color="whiteAlpha.100" height="100vh">
          <ModalHeader id="modal-header" color="white">
            <Box>
              <Text as="h1" marginLeft="10px" marginTop="5px">
                Sections
              </Text>
            </Box>
          </ModalHeader>
          {/* <ModalCloseButton id="modal-close-btn" /> */}
          <ModalBody id="modal-content">
            {/* Section List */}
            <HStack id="section-list" gap={0} padding={4}>
              {renderSections(props.sections)}
            </HStack>
          </ModalBody>

          <ModalFooter id="modal-footer">
            <Button id="modal-close-btn" onClick={onClose}>
              <Text as="h1">Close</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CourseBox;
