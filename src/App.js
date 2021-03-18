import './App.css';
import './scss/_stars.scss';
import './scss/_animations.scss';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';

function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <CssBaseline />
      <Home />
    </>
  );
}

export default App;