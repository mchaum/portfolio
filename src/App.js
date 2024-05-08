import './style/style.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    {/* Chemin vers les pages créées : */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      {/* Redirection vers une page erreur 404 si l'url ne correspond à rien de connu : */}
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
};

export default App;
