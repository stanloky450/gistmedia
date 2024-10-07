import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export default makeStyles(() => {
  const theme = useTheme();

  return {
    appBarSearch: {
      borderRadius: 4,
      marginBottom: '1rem',
      display: 'flex',
      padding: '16px',
    },
    pagination: {
      borderRadius: 4,
      marginTop: '1rem',
      padding: '16px',
    },
    gridContainer: {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
  };
});
