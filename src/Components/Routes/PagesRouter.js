import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Projects from '../../Pages/Projects';
import Skills from '../../Pages/Skills';
import Contact from '../../Pages/Contact';

const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
};

export default PagesRouter;