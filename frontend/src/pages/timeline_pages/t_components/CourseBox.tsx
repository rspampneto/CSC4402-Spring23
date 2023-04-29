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

const CourseBox = (props) => {
  // Attributes
  // Functions
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal Logic

  // JSX
  return (
    <>
      <Button onClick={onOpen} color="white" id="course-button">
        <Stack id="course">
          {/* Core Label */}
          <Box className="core-label">
            <Text as="h3">{props.type}</Text>
          </Box>

          {/* Course Layout */}
          <Stack>
            <HStack gap="70%">
              <Box>
                <Text>S</Text>
              </Box>
              <Box>
                <Text>M</Text>
              </Box>
            </HStack>

            <Box>
              <Text>{props.courseName}</Text>
            </Box>

            <HStack gap="20%">
              <Box>
                <Text>P</Text>
              </Box>
              <Box id="course-num-box">
                <Text>{props.courseID}</Text>
              </Box>
              <Box>
                <Text>H</Text>
              </Box>
            </HStack>
          </Stack>
        </Stack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} id="modal">
        {/* <ModalOverlay /> */}
        <ModalContent color="whiteAlpha.100" height="100vh">
          <ModalHeader>
            <Box>
              <Text>Sections</Text>
            </Box>
          </ModalHeader>
          {/* <ModalCloseButton id="modal-close-btn" /> */}
          <ModalBody id="modal-content">
            {/* Section List */}
            <HStack id="section-list" gap={0} padding={4}>
              <Stack>
                <Box textAlign="center">
                  <Text>Section 001</Text>
                </Box>
              </Stack>
              <Stack>
                <Box textAlign="center">
                  <Text>Section 002</Text>
                </Box>
              </Stack>
              <Stack>
                <Box textAlign="center">
                  <Text>Section 003</Text>
                </Box>
              </Stack>
            </HStack>
          </ModalBody>

          <ModalFooter id="modal-footer">
            <Button id="modal-close-btn" onClick={onClose}>
              <Text>Close</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CourseBox;
