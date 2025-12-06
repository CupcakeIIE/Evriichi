import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';

const MyBottomNavigation = () => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#008000' }}>
      <BottomNavigation sx={{ backgroundColor: '#008000' }}>
        <BottomNavigationAction label="Recents" icon={<img src="/Discord-Logo-White.svg" sx={{ color: '#ffffff' }} />} />
      </BottomNavigation>
    </Box>
  );
}

export default MyBottomNavigation;