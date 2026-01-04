import { Box, AppBar, Toolbar, Button } from '@mui/material';
import useStyles from './style';

const MyAppBar = ({view, setView}) => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor: '#008000'}}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button className={classes.buttonAppBar} onClick={() => setView('main')}>
              Accueil
            </Button>
            <Button className={classes.buttonAppBar}>
              Adhésion
            </Button>
            <Button className={classes.buttonAppBar}>
              Statuts
            </Button>
            <Button className={classes.buttonAppBar} onClick={() => setView('tournois')}>
              Tournois
            </Button>
            <Button className={classes.buttonAppBar}>
              Palmarès
            </Button>
            <Button className={classes.buttonAppBar}>
              Ressources
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MyAppBar;