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
import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ElectiveBox = (props) => {
  // Attributes
  // Hooks
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal Logic

  // JSX
  return (
    <>
      {/* Button */}
      <Button onClick={onOpen} color="white" id="elective-button">
        <Stack id="elective">
          {/* Elective Label */}
          <Box className="elective-course-label">
            <Text as="h3">{props.type}</Text>
          </Box>

          {/* Elective Layout */}
          <Stack>
            <HStack gap="89.9%">
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

            <HStack gap="39%">
              <Box>
                <Text>P</Text>
              </Box>
              <Box id="elective-num-box">
                <Text>{props.courseID}</Text>
              </Box>
              <Box>
                <Text>H</Text>
              </Box>
            </HStack>
          </Stack>
        </Stack>
      </Button>

      {/* Modal */}
      <Modal></Modal>
    </>
  );
};

export default ElectiveBox;
