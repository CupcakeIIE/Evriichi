import { useState } from 'react';
import './App.css'
import MyAppBar from './AppBar'
import MyBottomNavigation from './BottomNavigation';
import MainPage from './MainPage';
import Tournoi from './Tournois';

function App() {
  const [view, setView] = useState('main');

  return (
    <div>
      <MyAppBar view={view} setView={setView}/>
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          boxSizing: 'border-box',
        }}
      >
        {view === 'main' && (
          <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <MainPage />
          </div>
        )}

        {view === 'tournois' && (
          <div style={{ width: '100%' }}>
            <Tournoi />
          </div>
        )}
      </div>
      <MyBottomNavigation />
    </div>
  )
}

export default App;
