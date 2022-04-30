import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';

function App() {

  return (
    <div className='h-screen'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newslist" element={<NewsList />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>




  )
}

export default App;