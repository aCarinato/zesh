import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  // NAVBAR
  grow: {
    flexGrow: 1,
  },
  brand: {
    fontSize: '2rem',
    color: '#fff',
    // fontWeight: 'bold'
  },
  routes: {
    display: 'flex',
  },
  navLink: {
    padding: '0 1rem',
    color: '#fff',
  },
  // Main container
  main: {
    padding: '1rem',
  },
  cardTitle: {
    padding: '1.5rem',
  },
});

export default useStyles;
