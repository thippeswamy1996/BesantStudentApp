import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"; 
 

const Nav = () => {
  return (
   <nav>
        <div><img src={logo} alt="" /></div>
        <div>
            <ol>
                <li>
                    <Link to={"/Home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li ><Link to={"/AddStudent"}>Addstudent</Link>
                </li>
                <li><Link to={"/ViewStudents"}>Viewstudents</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/signup"}>Signup</Link>
                </li>
            </ol>
        </div>
   </nav>
  )
}

export default Nav