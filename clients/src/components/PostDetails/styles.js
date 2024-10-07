import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export const useStyles = makeStyles(() => {
  const theme = useTheme();

  return {
    media: {
      borderRadius: '20px',
      objectFit: 'cover',
      width: '100%',
      maxHeight: '600px',
    },
    card: {
      display: 'flex',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
        flexDirection: 'column',
      },
    },
    section: {
      borderRadius: '20px',
      margin: '10px',
      flex: 1,
    },
    imageSection: {
      marginLeft: '20px',
      width: '40%',
      height: '20%',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    recommendedPosts: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    loadingPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '15px',
      height: '39vh',
    },
    commentsOuterContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    commentsInnerContainer: {
      height: '400px',
      overflowY: 'auto',
      marginRight: '30px',
      width: '55%',
    },
  };
});
