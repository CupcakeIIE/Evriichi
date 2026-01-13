import { Button, Paper, Typography } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ConstructionIcon from '@mui/icons-material/Construction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import useStyles from './style';

const Ressources = () => {

  const classes = useStyles();

  return (
    <div className={classes.zoneRessources}>
      <Typography variant='h3'>
        Ressources Riichi Mahjong
      </Typography>


      <div className={classes.zoneCartes}>

        <Paper elevation={6} className={classes.paper} style={{width: '50%'}} >

          <div className={classes.textIcon}>
            <LibraryBooksIcon />
            <Typography variant='h5'>Initiation</Typography>
          </div>

          <Typography variant="h6">Slides d'introduction au mahjong japonais :</Typography>
          <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem', width: '100%'}}>
            <a  style={{width: '100%'}}
              href="slides.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant='contained' color='success' className={classes.button}>
                Version Mahjong Soul
              </Button>
            </a>
            <Button variant='contained' color='success' className={classes.button}>Version EMA</Button>
          </div>
          <a  style={{width: '100%', marginTop: '2.5rem'}}
            href="https://allegre.iiens.net/yakulist.php"
            target="_blank"
            rel="noreferrer"
            >
            <Button variant='contained' color='success' className={classes.button}>
              Liste des yakus
            </Button>
          </a>
        </Paper>

        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', width: '50%'}}>
          <Paper elevation={6} className={classes.paper} >
            <div className={classes.textIcon}>
              <RocketLaunchIcon />
              <Typography variant='h5'>Pour aller plus loin</Typography>
            </div>
            <a  style={{width: '100%'}}
              href="https://repo.riichi.moe/library.html#resources-strategy"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant='contained' color='success' className={classes.button}>
                Livres de stratégie
              </Button>
            </a>
          </Paper>
          
          <Paper elevation={6} className={classes.paper}>
            <div className={classes.textIcon}>
              <ConstructionIcon />
              <Typography variant='h5'>Outils</Typography>
            </div>
            <a  style={{width: '100%'}}
              href="https://tournoi.riichi.fr/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant='contained' color='success' className={classes.button}>
                Mahjong Tournament Sheet Generator
              </Button>
            </a>
            <Button variant='contained' color='success' className={classes.button} style={{marginTop: '1rem'}}>Deck Anki - Table des scores</Button>
          </Paper>
        </div>
      </div>
      
    </div>
  );
};

export default Ressources;
