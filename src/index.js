import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'


/*
  ``````````````````
  Font-family Global

  ``````````````````
*/
require('typeface-open-sans')

/*
  ```````````````````````````````````````````````````````````````````
  Theme of Material Design Color System for hashmicro - Think forward

  ```````````````````````````````````````````````````````````````````
*/

const themeOfHashMicro = createMuiTheme({
  

  palette: {
    primary: {      
      light:'#6d6d6d',
      main: '#424242',
      dark:'#1b1b1b',
      contrastText:'#6d6d6d'

    },
    secondary: {
      light:'#ffff56',
      main: '#ffea00',
      dark:'#c7b800',
      contrastText: '#ffff56',
      
    },
    error: {
      light: '#bf334c',
      main:'#B00020',
      dark:'#7b0016',
      contrastText: 'white'
    },
    warning: {
      light:'#ffee33',
      main: '#ffea00',
      dark: '#b2a300',
      contrastText: 'white'

    },
    success: {
      light: '#91ff35',
      main: '#76ff03',
      dark: '#52b202',
      contrastText: 'white'
    },
    common: {
      white : '#ffffff',
      black: 'black',
      transparent: 'transparent',
      grey: 'grey'
    }
  },

  surface:{

    main: '#FFFFFF'  
  },
  background: {

    main:'#FFFFFF'
  },

});

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={themeOfHashMicro}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')

);

serviceWorker.unregister();
