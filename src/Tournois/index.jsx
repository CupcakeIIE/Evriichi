import { useState } from "react";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import TournoiText from "./Tournoi";

const Tournoi = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '64px',
        paddingBottom: '56px',
        width: '100%',
      }}
    >
      <Typography variant='h3' style={{ textAlign: 'left', paddingLeft: '16px' }}>
        Tournois
      </Typography>

      <Paper elevation={6} sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '2em', padding: '1em', borderRadius: '30px' }}>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Tournoi 12/12/2025" />
          <Tab label="Tournoi 06/01/2026" />
          <Tab label="Tournoi 19/03/2026" />
        </Tabs>

        {/* Contenu des tabs, en dehors de Tabs */}
        <Box sx={{ padding: 2 }}>
          {tabValue === 0 && <TournoiText />}
          {tabValue === 1 && <Typography>Contenu du tab 2</Typography>}
          {tabValue === 2 && <Typography>Contenu du tab 3</Typography>}
        </Box>
      </Paper>
    </div>
  );
};

export default Tournoi;
