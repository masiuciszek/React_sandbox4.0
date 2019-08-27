import React from 'react';
import LogProvider from './context/logs/logs.state';
import TechProvider from './context/techs/techs.state';
import Logs from './components/logs/Logs';

function App() {
  return (
    <TechProvider>
      <LogProvider>
        <Logs />
      </LogProvider>
    </TechProvider>
  );
}

export default App;
