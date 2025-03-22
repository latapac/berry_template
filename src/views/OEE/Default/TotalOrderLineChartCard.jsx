import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

export default function TotalOrderLineChartCard({ isLoading, Count, name }) {
  const theme = useTheme();
  const [timeValue, setTimeValue] = React.useState(false);

  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  // Debug: Log the raw Count value
  console.log('Raw Count:', Count, 'Type:', typeof Count);

  // Format Count to one decimal place, handling numbers and numeric strings
  let formattedCount;
  const numericCount = Number(Count);
  if (isNaN(numericCount)) {
    formattedCount = Count; // Keep as-is if not a valid number
  } else {
    formattedCount = numericCount.toFixed(1); // Force 1 decimal place
  }

  // Debug: Log the formatted value
  console.log('Formatted Count:', formattedCount);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: 'primary.dark',
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 2,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
            },
            '&>div': {
              position: 'relative',
              zIndex: 5
            },
            minWidth: 200,
          }}
        >
          <Box 
            sx={{ 
              p: 2.5, 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'flex-end', // Aligns items to the bottom
              justifyContent: 'space-between' // Keeps left and right alignment
            }}
          >
            {/* Name - Left Aligned, Bottom Aligned */}
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '0.5px',
                lineHeight: 1.4,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                textAlign: 'left' // Left align the name
              }}
            >
              {name}
            </Typography>

            {/* Value - Right Aligned, Bottom Aligned */}
            <Typography
              sx={{
                fontSize: timeValue ? '1.5rem' : '1rem',
                fontWeight: 600,
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                whiteSpace: 'nowrap',
                textAlign: 'right' // Right align the value
              }}
            >
              {formattedCount} %
            </Typography>
          </Box>
        </MainCard>
      )}
    </>
  );
}

TotalOrderLineChartCard.propTypes = { 
  isLoading: PropTypes.bool,
  Count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string
};