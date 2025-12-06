import { useState } from 'react';
import './App.css'
import MyAppBar from './AppBar'
import MyBottomNavigation from './BottomNavigation';
import MainPage from './MainPage';
import Tournoi from './Tournois';

function App() {
  const [view, setView] = useState('main');

  return (
    <>
      <MyAppBar view={view} setView={setView}/>
      {view === 'main' &&
        <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', height: 'calc(100vh - 64px - 56px)'}}>
          <MainPage />
        </div>}
      {view === 'tournois' &&
        <div style={{display: 'flex', height: 'calc(100vh - 64px - 56px)', width: '100%'}}>
          <Tournoi />
        </div>}
      <MyBottomNavigation />
    </>
  )
}

export default App;
