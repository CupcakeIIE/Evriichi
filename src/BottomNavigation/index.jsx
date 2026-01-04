import { Box, BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';

const MyBottomNavigation = () => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#008000' }}>
      <BottomNavigation sx={{ backgroundColor: '#008000', display: 'flex', gap: '15em' }}>
        <Typography style={{ color: '#ffffff', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>Club affilié à la Fédération Française de Mahjong (FFMJ)</Typography>
        <BottomNavigationAction label="Recents" icon={<img src="/Discord-Logo-White.svg" sx={{ color: '#ffffff' }} />} />
      </BottomNavigation>
    </Box>
  );
}

export default MyBottomNavigation;