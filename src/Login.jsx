import React from 'react'
import { useState } from 'react'
import App from "./App";
import { useNavigate } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';





  const Login = () => {
  
    let navigate = useNavigate();
  
    let handleLogin = (e)=>{
        e.preventDefault()  ; 
        navigate("/App") ; 
        toast.info("Logged in succesffully")
    }

  return (
    <div>
      <ToastContainer/>
      <form action="" onSubmit={handleLogin}>
        <fieldset>
          <legend>
            <label htmlFor="Username">Username</label><br />
            <input type="text"  id="UserName"/><br />
            <label htmlFor="Password" id="pwd">Paasword</label><br />
            <input type="password" /><br />
            <button>Login</button><button>Cancel</button>
          </legend>
        </fieldset>
      </form>
    </div>
  )
}

export default Login
