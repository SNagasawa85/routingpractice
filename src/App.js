import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Numbers from './components/Numbers';
import Home from './components/Home';
import Words from './components/Words';

function App() {
  return (
<>
    
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:input" element={<Numbers/>}/>
      <Route path="/:word/:color1/:color2" element={<Words />}/>
    </Routes>
</>
  );
}

export default App;
