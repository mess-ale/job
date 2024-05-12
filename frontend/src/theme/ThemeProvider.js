import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#89fc00', // Color 2
    },
    secondary: { 
      default: '#212529', // Color 3
      main: '#ff4800',
    },
    background: {
      default: '#E8EAED', // Color 1
      main: '#000',
      arrow: '#ced4da',
      white: '#fff',
    },
    text: {
      primary: '#fff', // Color 4
      main: '#000', // Color 5
      primary2: '#89fc00' // color 6
    },
    hover: {
      text: '#ff4800', //color6
      background: '#fff'
    },
  },
});

export default theme;
