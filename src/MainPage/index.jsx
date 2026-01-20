import { Button, Grid, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const MainPage = ({view, setView}) => {
  return (
    <div style={{width: '100%', paddingTop: '4rem'}}>
      <div style={{
        padding: '16em', 
        backgroundImage: `url(${'riichi2.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        position: 'relative'
      }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)", // transparence ici
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            padding: "20px",
          }}
        >
          <Typography variant="h3">Evriichi</Typography>
          <br/>
          <Typography>Club de mahjong japonais à Évry-Coucouronnes (91)</Typography>
        </div>
        
      </div>

      <div style={{padding: '10em', backgroundColor: '#c0cebd', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <div>
          <Typography variant='h4'>Rejoignez-nous !</Typography>
          <Typography>Sur Discord ou sur Matrix</Typography>
          <div style={{gap:'1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem'}}>
            <a href='https://discord.com/invite/69xUzRYy92' target='_blank'><img src='discord.png' width='50' /></a>
            <AddCircleIcon fontSize='large' />
          </div>
        </div>
        <img src='rejoindre.jpg' width='300' />
      </div>
      
      <div style={{padding: '10em', backgroundColor: '#b2e4a5', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <img src='adhesion.jpg' width='500' />
        <div>
          <Typography variant='h4'>Adhésion</Typography>
          <br/>
          <Typography>Adhérez à notre association en remplissant le formulaire disponible ci-dessous !</Typography>
          <br/>
          <a
            href="adhesion.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant='contained' color='success'>Ici !</Button>
          </a>
        </div>
      </div>

      <div style={{padding: '10em', backgroundColor: '#c0cebd', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <div>
          <Typography variant='h4'>Statuts</Typography>
          <br/>
          <Typography>Consultez les statuts de l'association ci-dessous !</Typography>
          <br/>
          <a
            href="statuts.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant='contained' color='success'>Ici !</Button>
          </a>
        </div>
        <img src='statuts2.png' width='500' />
      </div>

      <div style={{padding: '10em', backgroundColor: '#b2e4a5', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <img src='tournois.png' width='300' />
        <div>
          <Typography variant='h4'>Tournois</Typography>
          <br/>
          <Typography>Découvrez la liste des tournois de mahjong en France !</Typography>
          <Typography>Vous retrouverez les lieux, dates, participants et modalités.</Typography>
          <Typography>Pour ceci, cliquez sur le bouton ci dessous.</Typography>
          <br/>
          <Button variant='contained' color='success' onClick={() => setView('tournois')}>Ici !</Button>
        </div>
      </div>

      <div style={{padding: '10em', backgroundColor: '#c0cebd', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <div>
          <Typography variant='h4'>Palmarès</Typography>
          <br/>
          <Typography>Admirez le palmarès de nos membres ci-dessous !</Typography>
          <br/>
          <Button variant='contained' color='success' onClick={() => setView('palmares')}>Ici !</Button>
        </div>
        <img src='palmares.png' />
      </div>
      
      <div style={{padding: '10em', backgroundColor: '#b2e4a5', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <img src='ressources.jpg' width='500' />
        <div>
          <Typography variant='h4'>Ressources</Typography>
          <br/>
          <Typography>Enfin, retrouvez ici les différentes ressources pour apprendre à jouer au mahjong.</Typography>
          <Typography>Ou pour en devenir un expert</Typography>
          <br/>
          <Button variant='contained' color='success' onClick={() => setView('ressources')}>Ici !</Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;