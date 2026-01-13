import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  zoneRessources: {
    display: 'flex', 
    flexDirection: 'column', 
    gap: '2rem', 
    marginTop: '3rem', 
    marginBottom: '2rem', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    padding: '2rem'
  },

  zoneCartes: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: '2rem', 
    width: '100%'
  },

  paper: {
    padding: '2em', 
    borderRadius: '20px !important', 
    alignItems: 'center', 
    justifyContent: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    // width: '50%'
  },

  textIcon: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: '1rem', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: '1.5rem'
  },

  button: {
    height: '3rem', 
    borderRadius: '15px !important', 
    width:'100%'
  }

}));

export default useStyles;