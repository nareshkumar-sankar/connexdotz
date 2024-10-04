import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Who_we_are from './components/who we are/Who_we_are';
import What_we_do from './components/what we do/What_we_do';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/who we are' element={<Who_we_are/>}/>
        <Route path='/what we do' element={<What_we_do/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>      
    </>
  )
}

export default App
