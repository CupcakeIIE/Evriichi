import { Button, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import data from './data';

const Palmares = () => {

  const [selected, setSelected] = useState('');
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (selected !== '' && data[selected]) {
      setRows(data[selected])
    }
  }, [selected]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '5rem 2rem',
        width: '100%',
      }}
    >
      <Typography variant='h3' style={{ textAlign: 'left', paddingLeft: '16px' }}>
        Palmarès
      </Typography>

      <Paper style={{/* width: '100%', height: '100%', */ padding: '2em', borderRadius: '30px', marginTop: '2rem'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>

          {/* all members name */}
          <div style={{width: '15%'}}>
            <Typography variant='h5' style={{marginBottom: '1rem'}}>Membres</Typography>
            <Divider />
            <Button color={selected === 'barbier' ? 'error' : 'success'} style={{marginBottom: '0.5rem', marginTop: '0.5rem'}} onClick={() => setSelected('barbier')}>Anthony Barbier</Button>
            <Divider />
            <Button color={selected === 'tlatli' ? 'error' : 'success'} style={{marginTop: '0.5rem'}} onClick={() => setSelected('tlatli')}>Selim Tlatli</Button>
          </div>
          <Divider orientation='vertical' flexItem style={{padding: '1em'}} />
          <div style={{paddingLeft: '1em', width: '100%'}}>
            {rows.length === 0
              ? 'Veuillez selectionner le joueur dont vous souhaitez découvrir le palmarès !'
              : <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" style={{backgroundColor: '#b2e4a5'}}>Date</TableCell>
                      <TableCell align="center" style={{backgroundColor: '#b2e4a5'}}>Tournois</TableCell>
                      <TableCell align="center" style={{backgroundColor: '#b2e4a5'}}>Lieu / Organisation</TableCell>
                      <TableCell align="center" style={{backgroundColor: '#b2e4a5'}}>Classement</TableCell>
                      <TableCell align="center" style={{backgroundColor: '#b2e4a5'}}>Hanchans</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.date}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align='center' component="th" scope="row">
                          {row.date}
                        </TableCell>
                        <TableCell align="center">{row.tournoi}</TableCell>
                        <TableCell align="center">{row.lieu}</TableCell>
                        <TableCell align="center">{row.classement}</TableCell>
                        <TableCell align="center">{row.hanchans}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            }
          </div>

        </div>
      </Paper>
    </div>
  );
};

export default Palmares;
