import { Button, Grid, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const MainPage = () => {
  return (
    <div style={{width: '100%', paddingTop: '4rem'}}>
      <div style={{padding: '10em', backgroundColor: '#b2e4a5'}}>
        <Typography variant="h3">Evriichi</Typography>
        <br/>
        <Typography>Club de mahjong japonais à Évry-Coucouronnes (91)</Typography>
      </div>

      <div style={{padding: '10em', backgroundColor: '#c0cebd', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <div>
          <Typography variant='h4'>Rejoignez-nous !</Typography>
          <Typography>Sur Discord ou sur Matrix</Typography>
          <div style={{gap:'1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem'}}>
            <AddCircleIcon fontSize='large' />
            <AddCircleIcon fontSize='large' />
          </div>
        </div>
        <img src='riichi.jpg' />
      </div>
      
      <div style={{padding: '10em', backgroundColor: '#b2e4a5', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <img src='riichi.jpg' />
        <div>
          <Typography>Adhérez à notre association en remplissant le formulaire disponible ci-dessous !</Typography>
          <br/>
          <Button variant='contained' color='success'>Ici !</Button>
        </div>
      </div>

      <div style={{padding: '10em', backgroundColor: '#c0cebd', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <div>
          <Typography>Consultez les statuts de l'association ci-dessous !</Typography>
          <br/>
          <Button variant='contained' color='success'>Ici !</Button>
        </div>
        <img src='riichi.jpg' />
      </div>

      <div style={{padding: '10em', backgroundColor: '#b2e4a5', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <img src='riichi.jpg' />
        <div>
          <Typography>Découvrez la liste des tournois de mahjong en France !</Typography>
          <Typography>Vous retrouverez les lieux, dates, participants et modalités.</Typography>
          <Typography>Pour ceci, cliquez sur le bouton ci dessous.</Typography>
          <br/>
          <Button variant='contained' color='success'>Ici !</Button>
        </div>
      </div>

      <div style={{padding: '10em', backgroundColor: '#c0cebd', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <div>
          <Typography>Admirez le palmarès de nos membres ci-dessous !</Typography>
          <br/>
          <Button variant='contained' color='success'>Ici !</Button>
        </div>
        <img src='riichi.jpg' />
      </div>
      
      <div style={{padding: '10em', backgroundColor: '#b2e4a5', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '15rem'}}>
        <img src='riichi.jpg' />
        <div>
          <Typography>Enfin, retrouvez ici les différentes ressources pour apprendre à jouer au mahjong.</Typography>
          <Typography>Ou pour en devenir un expert</Typography>
          <br/>
          <Button variant='contained' color='success'>Ici !</Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;