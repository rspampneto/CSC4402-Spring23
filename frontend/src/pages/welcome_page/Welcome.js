import React from "react";
import "./welcome.css";
import landing_img from "../../assets/photos/a-book-978888_1920.jpg";
import { easeIn, motion } from "framer-motion";

export const Welcome = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <div id="welcome">
      {/* landing background */}
      <div id="welcome_bg">
        <img src={landing_img}></img>
      </div>

      {/* landing content */}
      <div id="welcome_content" className="bg_space">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: easeIn, duration: 1 }}
          className="vert_spaceB font_large"
        >
          Welcome
        </motion.h1>
        <h4 className="vert_spaceB font_medium">Let's Help Mold Your Future</h4>

        <button id="cta_button" className="vert_spaceA">
          <h1>Start Here</h1>
        </button>
      </div>
    </div>
  );
};
