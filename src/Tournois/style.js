import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  titleDecoration: {
    textDecoration: 'underline',
  },
  alignement: {
    textAlign: 'left',
  },
  paper: {
    borderBottom: 1, 
    borderColor: 'divider', 
    marginTop: '2em', 
    padding: '1em', 
    borderRadius: '30px !important',
  },
  titlePaper: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'left', 
    paddingLeft: '16px',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5rem 2rem',
    width: '100%',
  }

}));

export default useStyles;