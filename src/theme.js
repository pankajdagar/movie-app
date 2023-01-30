import { createTheme } from '@mui/material';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#D4D7DD',
    },
    secondary: {
      main: '#00E0FF',
    },
    background: {
      main: '#273244',
      dark: '#1A2536',
      light: '#394B61',
    },
    text: {
      primary: '#D4D7DD',
      secondary: '#00E0FF',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '15px',
        },
        h3: {
          fontSize: '20px',
        },
      },
    },
  },
});
