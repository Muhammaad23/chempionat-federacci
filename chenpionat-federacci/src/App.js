import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cobitiya from './components/Cobitiya/Cobitiya';
import Document from './components/Document/Document';
import Galareya from './components/Galareya/Galareya';
import Golfe from './components/Golfe/Golfe';
import Golfis from './components/Golfis/Golfis';
import Home from './components/Home/Home';
import MoyAkkaunt from './components/MoyAkkaunt/MoyAkkaunt';
import Golfa from './components/OHacRouter/Golfa';
import Regisratsiya from './components/Regisratsiya/Regisratsiya';
import Login from './components/RouterLogin/Login';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/golfa' element={<Golfa/>} />
        <Route path='/golfis' element={<Golfis/>} />
        <Route path='/golfe' element={<Golfe/>} />
        <Route path='/document' element={<Document/>} />
        <Route path='/galareya' element={<Galareya/>} />
        <Route path='/cobitiya' element={<Cobitiya/>} />
        <Route path='/button' element={<MoyAkkaunt/>} />
        <Route path='/regisratsiya' element={<Regisratsiya/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;