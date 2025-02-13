import React from 'react'
import App from "./App"
import Login from "./Login"
import About from "./About"
import Home from "./Home"
import Pagenotfound from "./Pagenotfound"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' 
import Signup from './Signup'
import { ToastContainer , toast } from 'react-toastify'
import Nav from "./Nav"
import AddStudent from "./AddStudent"
import  ViewStudents from "./ViewStudents"
import UpdateStudentdata from "./UpdateStudentdata"

const LaningPage = () => {

  return (
    <div>
      <Router>
            <ToastContainer/>
              <Nav/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='/ViewStudents' element={<ViewStudents/>}/>
                 
                  <Route path='/AddStudent' element={<AddStudent/>}/>
                  <Route path='/AddStudent' element={<UpdateStudentdata/>}/>
                  {/* <Route path='*' element={<Pagenotfound/>}/> */}

              </Routes>
              
          </Router>
    </div>
  )
}

export default LaningPage
