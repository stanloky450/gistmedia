import { makeStyles } from '@mui/styles';
import { blue, deepPurple, green, yellow } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
// import {
//   AppBar as MuiAppBar,
//   Typography,
//   Toolbar,
//   Avatar,
// } from '@mui/material';

export const useStyles = makeStyles(() => {
  const theme = useTheme();

  return {
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 50px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    heading: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      fontSize: '2em',
      fontWeight: 300,
    },
    image: {
      marginLeft: '10px',
      marginTop: '5px',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px',
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
      },
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '400px',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        marginTop: 20,
        justifyContent: 'center',
      },
    },
    logout: {
      marginLeft: '20px',
      backgroundColor: blue[800],
      color: 'white',
      fontWeight: 'bold',
      borderColor: 'white',
      border: '2px solid',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
      // fontSize: '40px',
      fontWeight: 'bold',
      textDecoration: 'None',
      color: 'red',
      border: '2px solid',
      borderColor: 'blue',
    },
    purple: {
      // color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: blue[800],
      color: 'white',
      fontWeight: 'bold',
      borderColor: 'white',
      border: '2px solid',
    },
  };
});
