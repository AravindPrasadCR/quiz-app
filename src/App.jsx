import './App.css'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'


function App() {
  

  return (
    <>
   <BrowserRouter> 
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
    
    </Routes>
    </BrowserRouter>
    

    
    </>
  )
}

export default App