import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle'; // Status indicator

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';

export default function EarningCard({ isLoading, data }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          aria-hidden={Boolean(anchorEl)}
          sx={{
            bgcolor: 'primary.light ',
            background: `linear-gradient(135deg, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[50]  } 100%)`, // Gradient background
            color: '#000',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 2, // Rounded corners
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transitions
            '&:hover': {
              transform: 'translateY(-4px)', // Slight lift on hover
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)' // Enhanced shadow on hover
            }
          }}
        >
          <Box sx={{ p: 2.6 }}> {/* Increased padding for better spacing */}
            <Grid container direction="column">
              {/* Header Section */}
              <Grid>
                <Grid 
                  container 
                  sx={{ 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 1 // Margin bottom for spacing
                  }}
                >
                  <Grid>
                  <Typography variant="h3" gutterBottom>
                   Line No 7
                  </Typography> 
                  </Grid>
                  <Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      {/* Enhanced Status Indicator */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          bgcolor: data?.isOnline ? 'success.main' : 'error.main',
                          borderRadius: 2,
                          px: 1,
                          py: 0.5,
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        <CircleIcon sx={{ fontSize: '1rem', color: '#fff' }} />
                        <Typography variant="caption" sx={{ color: '#fff', fontWeight: 600 }}>
                          {data?.isOnline ? 'Online' : 'Offline'}
                        </Typography>
                      </Box>
                      {/* Reinstated Menu Button */}
                      {/* <Avatar
                        variant="rounded"
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.mediumAvatar,
                          bgcolor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
                          color: '#fff',
                          zIndex: 1,
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.2)' // Hover effect
                          }
                        }}
                        aria-controls="menu-earning-card"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon fontSize="inherit" />
                      </Avatar> */}
                    </Box>
                    {/* Styled Menu */}
                    {/* <Menu
                      id="menu-earning-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                      sx={{
                        '& .MuiPaper-root': {
                          bgcolor: 'grey.900', // Dark menu background
                          color: '#fff',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                          borderRadius: 1
                        }
                      }}
                    >
                      <MenuItem 
                        onClick={handleClose}
                        sx={{ '&:hover': { bgcolor: 'grey.800' } }} // Hover effect
                      >
                        <GetAppTwoToneIcon sx={{ mr: 1.75, color: 'secondary.main' }} /> Import Card
                      </MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        sx={{ '&:hover': { bgcolor: 'grey.800' } }}
                      >
                        <FileCopyTwoToneIcon sx={{ mr: 1.75, color: 'secondary.main' }} /> Copy Data
                      </MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        sx={{ '&:hover': { bgcolor: 'grey.800' } }}
                      >
                        <PictureAsPdfTwoToneIcon sx={{ mr: 1.75, color: 'secondary.main' }} /> Export
                      </MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        sx={{ '&:hover': { bgcolor: 'grey.800' } }}
                      >
                        <ArchiveTwoToneIcon sx={{ mr: 1.75, color: 'secondary.main' }} /> Archive File
                      </MenuItem>
                    </Menu> */}
                  </Grid>
                </Grid>
              </Grid>
              {/* Machine Information Section */}
              <Grid container direction="column">
                <Typography 
                  sx={{ 
                    fontSize: '1.25rem', // Larger text
                    fontWeight: 600, 
                    mb: 1,
                    letterSpacing: 0.5 // Better readability
                  }}
                >
                  {data?.machineName || 'Tube Filling'}
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '1rem', 
                    fontWeight: 400, 
                    mb: 0.75,
                    opacity: 0.9 // Slightly faded for hierarchy
                  }}
                >
                  Model: {data?.model || 'Mac300'}
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '1rem', 
                    fontWeight: 400, 
                    mb: 0.75,
                    opacity: 0.9
                  }}
                >
                  Serial No: {data?.serialNumber || 'MAC/24-25/0045'}
                </Typography>
                {/* <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: data?.isOnline ? 'success.light' : 'error.light', // Lighter shades for contrast
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  <CircleIcon sx={{ fontSize: '0.75rem' }} />
                  Status: {data?.isOnline ? 'Online' : 'Offline'}
                </Typography> */}
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
}

// Prop type definitions
EarningCard.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    machineName: PropTypes.string,
    model: PropTypes.string,
    serialNumber: PropTypes.string,
    isOnline: PropTypes.bool
  })
};

// Default props for safety
EarningCard.defaultProps = {
  isLoading: false,
  data: {
    machineName: 'N/A',
    model: 'N/A',
    serialNumber: 'N/A',
    isOnline: false
  }
};