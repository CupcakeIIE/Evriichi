import { useState } from "react";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import TournoiText13122025 from "./Tournoi13122025";
import useStyles from "./style";

const Tournoi = () => {
  const classes = useStyles()

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.div}>
      <Typography variant='h3' className={classes.title}>
        Tournois
      </Typography>

      <Paper elevation={6} className={classes.paper}>
        <Tabs 
          value={tabValue} 
          onChange={handleChange}
          sx={{
            '& .MuiTab-root': {
              color: 'success.main',
            },
            '& .MuiTab-root.Mui-selected': {
              color: 'success.main',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'success.main',
            },
          }}
        >
          <Tab label="Tournoi 12/12/2025" />
          {/* <Tab label="Tournoi 06/01/2026" /> */}
          {/* <Tab label="Tournoi 19/03/2026" /> */}
        </Tabs>

        {/* Contenu des tabs, en dehors de Tabs */}
        <Box sx={{ padding: 2 }}>
          {tabValue === 0 && <TournoiText13122025 />}
          {/* {tabValue === 1 && <Typography>Contenu du tab 2</Typography>} */}
          {/* {tabValue === 2 && <Typography>Contenu du tab 3</Typography>} */}
        </Box>
      </Paper>
    </div>
  );
};

export default Tournoi;
