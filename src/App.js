import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';


function App() {
  return (
    <div className='app'>
      {/* App components */}

      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}


    </div>
  );
}

export default App;
