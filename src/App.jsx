import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';



  const App = () => {

  return (
    <div>
      <Navbar/>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
      </HashRouter>
      
    </div>
     
  )
}

export default App
