import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import Elements from './Elements';
import Ele1 from '../assets/slide_1.png'
import Ele2 from '../assets/slide_2.png';
import Ele3 from '../assets/slide_3.png';
import Ele4 from '../assets/slide_4.png';

const SwitchingStacks = () => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const elements = [
    ['Worldview Training and Consulting Service PLC', Ele1],
    ['AUGMENT YOUR L&D TEAM WITH INDUSTRY', Ele2],
    ['SUPPORT YOUR BUSINESS WITH INNOVATIVE', Ele3],
    ['BUILD EMPLOYEE CAPABILITIES WITH IMPACTFUL', Ele4],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElementIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [elements.length]);
  
  return (
    <Box
      sx={{
        fontWeight: 'bold',
        color: 'primary.main',
        paddingBottom: '100vh',
        '& .switching-element': {
          opacity: 0,
          transition: 'opacity 1s ease',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        '& .switching-element.active': {
          opacity: 1,
          zIndex: 1,
        },
      }}
    >
      {elements.map((element, index) => (
        <Stack
          key={index}
          className={`switching-element ${index === currentElementIndex ? 'active' : ''}`}
        >
          <Elements imageUrl={element[1]} title={element[0]} num={currentElementIndex}/>
        </Stack>
      ))}
    </Box>
  );
};

export default SwitchingStacks;