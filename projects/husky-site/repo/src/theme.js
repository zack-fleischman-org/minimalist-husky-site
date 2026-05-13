import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    h1: { fontWeight: 300, letterSpacing: '-0.03em' },
    h2: { fontWeight: 300, letterSpacing: '-0.02em' },
  },
  palette: {
    mode: 'light',
    background: { default: '#fafafa', paper: '#ffffff' },
    primary: { main: '#1a1a2e' },
    text: { primary: '#1a1a2e', secondary: '#6b7280' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fafafa',
        },
      },
    },
  },
});

export default theme;
