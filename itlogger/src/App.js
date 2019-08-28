import React from 'react';
import LogProvider from './context/logs/logs.state';
import TechProvider from './context/techs/techs.state';
import Logs from './components/logs/Logs';
import Layout from './components/layout/Layout';
import AddBtn from './components/layout/AddBtn';
import useToggle from './hooks/useToggle';
import AddLog from './components/logs/AddLog';

function App() {
  const [on, toggle] = useToggle(false);
  return (
    <TechProvider>
      <LogProvider>
        <Layout>
          {on ? <AddLog className="modal" toggle={toggle} /> : null}
          <Logs />
          <button onClick={toggle}>Test</button>
        </Layout>
      </LogProvider>
    </TechProvider>
  );
}

export default App;
