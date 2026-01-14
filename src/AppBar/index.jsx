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
            <a
              href="adhesion.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button className={classes.buttonAppBar}>
                Adhésion
              </Button>
            </a>
            <a
              href="statuts.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button className={classes.buttonAppBar}>
                Statuts
              </Button>
            </a>
            <Button className={classes.buttonAppBar} onClick={() => setView('tournois')}>
              Tournois
            </Button>
            <Button className={classes.buttonAppBar} onClick={() => setView('palmares')}>
              Palmarès
            </Button>
            <Button className={classes.buttonAppBar} onClick={() => setView('ressources')}>
              Ressources
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MyAppBar;