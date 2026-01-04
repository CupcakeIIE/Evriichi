import { Grid, Typography } from "@mui/material";

const MainPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Grid container spacing={20} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h3">Evriichi</Typography>
          <br/>
          <Typography>Club de mahjong japonais à Évry-Coucouronnes (91)</Typography>
        </Grid>

        <Grid item>
          <img src="/riichi.jpg" alt="Evriichi" style={{ maxWidth: '300px', height: 'auto' }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;