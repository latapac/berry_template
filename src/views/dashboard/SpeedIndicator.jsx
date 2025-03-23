import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SpeedIndicator = ({ speed }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (speed / 100) * circumference;

  return (
    <Box sx={{ position: 'relative', width: 120, height: 60, overflow: 'hidden' }}>
      <svg width="120" height="60" viewBox="0 0 120 60">
        {/* Half Donut Background */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e0e0e0" // Light gray background
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference / 2}
          transform="rotate(-90 60 60)"
        />
        {/* Half Donut Progress */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#4caf50" // Green progress
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
        {/* Needle */}
        <line
          x1="60"
          y1="60"
          x2="60"
          y2="20"
          stroke="#424242" // Dark gray needle
          strokeWidth="2"
          transform={`rotate(${speed * 1.8 - 90} 60 60)`}
        />
      </svg>
      {/* Speed Text */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#424242', // Dark gray text
        }}
      >
        {speed}%
      </Box>
    </Box>
  );
};

SpeedIndicator.propTypes = {
  speed: PropTypes.number.isRequired,
};

export default SpeedIndicator;