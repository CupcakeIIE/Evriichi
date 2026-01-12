import { Button, Paper, Typography } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ConstructionIcon from '@mui/icons-material/Construction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Ressources = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '5rem', marginBottom: '5rem', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant='h3'>
        Ressources Riichi Mahjong
      </Typography>


      <Paper elevation={6} 
        sx={{ padding: '2em', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', width: '81%' }}
      >
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem'}}>
          <LibraryBooksIcon />
          <Typography variant='h5'>Initiation</Typography>
        </div>
        <Typography>Slides d'introduction au mahjong japonais :</Typography>
        <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem', width: '100%'}}>
          <a  style={{width: '100%'}}
            href="slides.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant='contained' style={{height: '3rem', borderRadius: '15px'}}>
              Version Mahjong Soul
            </Button>
          </a>
          <Button variant='contained' style={{width: '100%', height: '3rem', borderRadius: '15px'}}>Version EMA</Button>
        </div>
        <a  style={{width: '100%', marginTop: '1.5rem'}}
          href="https://allegre.iiens.net/yakulist.php"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant='contained' style={{width: '100%', height: '3rem', borderRadius: '15px'}}>
            Liste des yakus
          </Button>
        </a>
      </Paper>

      
      <Paper elevation={6} 
        sx={{ padding: '2em', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', width: '81%'  }}
      >
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem'}}>
          <RocketLaunchIcon />
          <Typography variant='h5'>Pour aller plus loin</Typography>
        </div>
        <a  style={{width: '100%'}}
          href="https://repo.riichi.moe/library.html#resources-strategy"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant='contained' style={{width: '100%', height: '3rem', borderRadius: '15px'}}>
            Livres de stratégie
          </Button>
        </a>
      </Paper>
      
      <Paper elevation={6} 
        sx={{ padding: '2em', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', width: '81%'  }}
      >
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem'}}>
          <ConstructionIcon />
          <Typography variant='h5'>Outils</Typography>
        </div>
        <a  style={{width: '100%'}}
          href="https://tournoi.riichi.fr/"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant='contained' style={{width: '100%', height: '3rem', borderRadius: '15px'}}>
            Mahjong Tournament Sheet Generator
          </Button>
        </a>
        <Button variant='contained' style={{marginTop: '1rem', width: '100%', height: '3rem', borderRadius: '15px'}}>Deck Anki - Table des scores</Button>
      </Paper>
    </div>
  );
};

export default Ressources;
