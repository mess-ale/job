import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Element1 from './Element1';
import Element2 from './Element2';
import Element3 from './Element3';

const SwitchingStacks = () => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const elements = [<Element1 />,];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElementIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [elements.length]);

  return (
    <Box
      sx={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'primary.main',
        paddingBottom: '100vh',
        '& .switching-element': {
          opacity: 0,
          transition: 'opacity 1s ease',
          position: 'absolute', // Keep elements in the same place
        },
        '& .switching-element.active': {
          opacity: 1,
        },
      }}
    >
      {elements.map((element, index) => (
        <div
          key={index}
          className={`switching-element ${index === currentElementIndex ? 'active' : ''}`}
        >
          {element}
        </div>
      ))}
    </Box>
  );
};

export default SwitchingStacks;
