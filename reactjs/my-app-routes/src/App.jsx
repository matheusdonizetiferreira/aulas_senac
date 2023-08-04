import React from 'react'
import { BrowserRouter as Router,
Route,
Routes 
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/Menu';


import './App.css'

function App() {
 
  return (
    <>
     <h1>Sistema de Rotas Reactjs</h1>
     <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={ <Home/> } /> 
        <Route path="/about" element={ <About/> } /> 
        <Route path="/contact" element={ <Contact/> } /> 
      </Routes>
     </Router>
    </>
  )
}

export default App
