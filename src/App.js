import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppContainer from './Components/AppContainer/AppContainer';

function App() {
  return (
    <BrowserRouter>
      <main >
        <AppContainer />
      </main>
    </BrowserRouter>
  );
}

export default App;
