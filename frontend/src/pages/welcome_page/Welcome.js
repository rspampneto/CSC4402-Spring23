import React from "react";
import "./welcome.css";
import landing_img from "../../assets/photos/a-book-978888_1920.jpg";
import { easeIn, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export const Welcome = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <Box id="welcome">
      {/* landing background */}
      <Box id="welcome_bg">
        <img src={landing_img}></img>
      </Box>

      {/* landing content */}
      <Box id="welcome_content" className="bg_space">
        {/* Welcome Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: easeIn, duration: 1 }}
          className="vert_spaceB font_large"
        >
          Welcome
        </motion.h1>
        {/* Subtitle */}
        <Text className="vert_spaceB font_medium">
          Let's Help Mold Your Future
        </Text>

        {/* Call to Action Button */}
        <Link to="/select">
          <Box as="button" id="cta_button" className="vert_spaceA">
            <Text as="h1">Start Here</Text>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
