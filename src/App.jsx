import { useState } from 'react';
import './App.css'
import MyAppBar from './AppBar'
import MyBottomNavigation from './BottomNavigation';
import MainPage from './MainPage';
import Tournoi from './Tournois';
import Ressources from './Ressources';
import Palmares from './Palmares';

function App() {
  const [view, setView] = useState('main');

  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <MyAppBar view={view} setView={setView}/>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'auto',
        }}
      >
        {view === 'main' && <MainPage view={view} setView={setView} />}
        {view === 'tournois' && <Tournoi />}
        {view === 'palmares' && <Palmares />}
        {view === 'ressources' && <Ressources />}
      </div>
      {/* <MyBottomNavigation /> */}
    </div>
  )
}

export default App;
