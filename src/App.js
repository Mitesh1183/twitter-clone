import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar'
import Feed from './component/Feed'
import Widgets from'./component/Widgets'

const App=()=> {

  return (
  <div className='app'>
 
    <Sidebar/>
    <Feed/>
    <Widgets/>
  </div>);
}


export default App;

