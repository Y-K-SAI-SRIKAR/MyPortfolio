import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Projects from './Pages/Projects';
import ExtraCurr from './Pages/ExtraCurr';
import Hobbies from './Pages/Hobbies';
import Connect from './Pages/Connect';
import Acheive from './Pages/Achieve';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path ='/leadership' element={<ExtraCurr/>}/>
        <Route path='/hobbies' element ={<Hobbies/>}/>
        <Route path='/connect' element={<Connect/>}/>
        <Route path='acheive' element={<Acheive/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
