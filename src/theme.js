import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen, orange, red, yellow } from '@material-ui/core/colors';

// Create a theme instance.
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

const plantTreesTheme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[800],
    },
    secondary: {
      main: orange[900],
    },
  },
});

export default plantTreesTheme;
export { defaultTheme };
