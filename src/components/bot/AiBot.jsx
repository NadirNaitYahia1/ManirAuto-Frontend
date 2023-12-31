import React, { useState } from "react";
import { motion } from "framer-motion";
import bot from "../../assets/bot9.png";
import ChatbotPopup from "./ChatbotPopup";

const AiBot = ({ onChatbotClick }) => {
  const [predictVisible, setPredictVisible] = useState(false);

  const handlePredictClick = () => {
    onChatbotClick();
  };

  const handlePredictClose = () => {
    setPredictVisible(false);
  };

  return (
    <>
      <motion.div
        className="w-full flex justify-end fixed"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <motion.img
          src={bot}
          onClick={handlePredictClick}
          alt=""
          className="h-[80px] cursor-pointer mx-2"
          initial={{ opacity: 0.99, y: 60 }}
          animate={{
            opacity: 1,
            y: [60, 40, 60],
          }}
          transition={{
            delay: 0.5,
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </motion.div>

      {predictVisible && <ChatbotPopup onClose={handlePredictClose} />}
    </>
  );
};

export default AiBot;
