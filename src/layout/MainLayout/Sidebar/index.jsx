import { memo, useMemo } from 'react'; // React utilities for memoization and performance optimization

import useMediaQuery from '@mui/material/useMediaQuery'; // Hook to check media query breakpoints
import Drawer from '@mui/material/Drawer'; // MUI Drawer component for sidebar
import Box from '@mui/material/Box'; // MUI Box component for layout

// Third-party library for smooth scrolling inside the drawer
import PerfectScrollbar from 'react-perfect-scrollbar';

// Custom components for the sidebar
import MenuList from '../MenuList'; // Component for the menu items
import LogoSection from '../LogoSection'; // Component for the logo
import MiniDrawerStyled from './MiniDrawerStyled'; // Styled drawer component

// Custom hooks and constants
import useConfig from 'hooks/useConfig'; // Hook for global configuration
import { drawerWidth } from 'store/constant'; // Constant for drawer width

// API functions to manage menu state
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| SIDEBAR DRAWER COMPONENT ||============================== //

function Sidebar() {
  // Check if the screen size is below the 'md' breakpoint
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  // Fetch menu-related state from API
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  // Get configuration settings
  const { miniDrawer, mode } = useConfig();

  // Memoized logo section for performance optimization
  const logo = useMemo(
    () => (
      <Box sx={{ display: 'flex', p: 2 }}>
        <LogoSection />
      </Box>
    ),
    []
  );

  // Memoized drawer content to prevent unnecessary re-renders
  const drawer = useMemo(() => {
    // Placeholder for additional drawer content (if needed in the future)
    const drawerContent = <> </>;

    // Default styles for drawer padding and margins
    let drawerSX = { paddingLeft: '0px', paddingRight: '0px', marginTop: '55px' };
    if (drawerOpen) drawerSX = { paddingLeft: '16px', paddingRight: '16px', marginTop: '0px' };

    return (
      <>
        {downMD ? (
          // If screen size is below 'md', use a Box container for menu
          <Box sx={drawerSX}>
            <MenuList />
            {drawerOpen && drawerContent}
          </Box>
        ) : (
          // If screen size is 'md' or larger, use PerfectScrollbar for smooth scrolling
          <PerfectScrollbar style={{ height: 'calc(100vh - 88px)', ...drawerSX }}>
            <MenuList />
            {drawerOpen && drawerContent}
          </PerfectScrollbar>
        )}
      </>
    );
    // Dependencies: Only re-run if `downMD`, `drawerOpen`, or `mode` changes
  }, [downMD, drawerOpen, mode]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: { xs: 'auto', md: drawerWidth } }} aria-label="mailbox folders">
      {/* Conditionally render the drawer based on screen size and mini drawer state */}
      {downMD || (miniDrawer && drawerOpen) ? (
        <Drawer
          variant={downMD ? 'temporary' : 'persistent'} // Use temporary drawer for small screens, persistent otherwise
          anchor="left"
          open={drawerOpen}
          onClose={() => handlerDrawerOpen(!drawerOpen)} // Toggle drawer open/close state
          sx={{
            '& .MuiDrawer-paper': {
              mt: downMD ? 0 : 11, // Adjust margin-top based on screen size
              zIndex: 1099, // Ensure drawer appears above other content
              width: drawerWidth,
              bgcolor: 'background.default', // Set background color
              color: 'text.primary', // Set text color
              borderRight: 'none' // Remove right border for a cleaner look
            }
          }}
          ModalProps={{ keepMounted: true }} // Improve performance by keeping modal mounted
          color="inherit"
        >
          {downMD && logo} {/* Show logo only for small screens */}
          {drawer}
        </Drawer>
      ) : (
        // Permanent mini drawer for larger screens
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {logo}
          {drawer}
        </MiniDrawerStyled>
      )}
    </Box>
  );
}

// Export component wrapped in memo to prevent unnecessary re-renders
export default memo(Sidebar);
