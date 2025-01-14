import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export const useStyles = makeStyles(() => {
  const theme = useTheme(); // Use the theme hook to access the theme

  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  };
});
