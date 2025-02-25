import React from 'react'
import Nav from './Nav'
 import { ToastContainer, toast } from 'react-toastify/unstyled'
 import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
 import "./global.css";
 import "./login.css";
 import Home from './Home';
 

const App = () => {
  return (
    <div>
      {

   <>
   <Router>
   <ToastContainer/>
   <Nav/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Nav' element={<Nav/>}/>
    </Routes>
   </Router>
  </>
      }
    </div>
  )
}

export default App
