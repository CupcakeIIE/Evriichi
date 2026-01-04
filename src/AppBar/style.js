import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

  buttonAppBar: {
    color: '#fff !important',
    // marginRight: '3em !important',
    padding: '1.4em !important',
    '&:focus': {
      outline: 'none',          // supprime le contour
      boxShadow: 'none',        // supprime le shadow
    },
    '&:active': {
      outline: 'none',
      boxShadow: 'none',
    },
  }

}));

export default useStyles;