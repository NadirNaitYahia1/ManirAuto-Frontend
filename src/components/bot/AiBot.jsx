import React from 'react';
import bot from '../../assets/bot9.png';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const AiBot = () => {
  const navigate = useNavigate("")



  const clicked = () => {
    navigate('/predict');

  }
  return (
    <motion.div
      className='w-full flex justify-end fixed'
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 10 }}
    >
      <motion.img
        src={bot}
        onClick={clicked}
        alt=''
        className='h-[80px]   cursor-pointer mx-2'
        initial={{ opacity: 0.99, y: 60 }}
        animate={{
          opacity: 1,
          y: [60, 40, 60],
        }}
        transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: 'mirror' }}
      />
    </motion.div>
  );
};

export default AiBot;
