import React from 'react';
import LogProvider from './context/logs/logs.state';
import TechProvider from './context/techs/techs.state';
import Logs from './components/logs/Logs';
import Layout from './components/layout/Layout';
import AddBtn from './components/layout/AddBtn';
import useToggle from './hooks/useToggle';
import AddLog from './components/logs/AddLog';
import EditLog from './components/logs/EditLog';
import TechsList from './components/techs/TechsList';
import AddTech from './components/techs/AddTech';




function App() {
  const [on, toggle] = useToggle(false);
  const [editLog, toggleEditLog] = useToggle(false);
  const [techs, toggleTechs] = useToggle(false);
  const [addTechs, toggleAddTechs] = useToggle(false);

  return (
    <TechProvider>
      <LogProvider>
        <Layout>

          {on && <AddLog className="modal" toggle={toggle} /> }
          <Logs toggleEditLog={toggleEditLog} />
          {editLog && <EditLog className="modal" toggleEditLog={toggleEditLog} />}
          <AddBtn toggle={toggle} toggleEditLog={toggleEditLog} toggleTechs={toggleTechs} toggleAddTechs={toggleAddTechs} />
          {techs && <TechsList toggleTechs={toggleTechs} />}
          {addTechs && <AddTech toggleAddTechs={toggleAddTechs} /> }
        </Layout>
      </LogProvider>
    </TechProvider>
  );
}

export default App;
