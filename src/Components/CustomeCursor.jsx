// src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY});
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-10 h-10 top-[-50%] left-[-50%] rounded-full bg-gradient-to-r from-yellow-400 to-red-500 pointer-events-none"

      animate={{
      
        x: cursorPosition.x, // Adjust offset to center the cursor
        y: cursorPosition.y, // Adjust offset to center the cursor
      }}
    
    
    />
  );
};

export default CustomCursor;
