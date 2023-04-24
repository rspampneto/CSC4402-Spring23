import React from "react";
import { Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import landing_img from "../../assets/photos/books-1204029_1920.jpg";
import { easeIn, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { OptionBox } from "./c_components/OptionBox";

import "./select.css";
import "../../App.css"; // Alignment & Font Classes

export const Select = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <Box id="select">
      {/* landing background */}
      <Box id="select_bg">
        <img src={landing_img}></img>
      </Box>

      {/* Select Content */}
      <Box id="select-content" className="bg_space">
        {/* Title */}
        <motion.h1 id="select-title">Select A Concentration</motion.h1>

        {/* Option Display */}
        <SimpleGrid columns={2} spacing={25} className="option-layout">
          <Link to="/cloud-computing">
            <OptionBox title="Cloud Computing" />
          </Link>
          <Link to="/data-science">
            <OptionBox title="Data Science" />
          </Link>
          <Link to="/cyber-security">
            <OptionBox title="Cyber Security" />
          </Link>
          <Link to="/software-development">
            <OptionBox title="Software Dev." />
          </Link>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
