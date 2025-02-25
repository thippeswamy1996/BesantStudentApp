import React from 'react'
import { ToastContainer , toast } from 'react-toastify'

const Signup = () => {
  return (
    <div>
    <ToastContainer/>
    <form  id='Signup' action="" >
      <fieldset>
        <legend>
          <label htmlFor="Username">Username</label><br />
          <input type="text"  id="UserName"/><br />
          <label htmlFor="Email">Email</label>
          <br></br>
          <input type="text" id="Email" ></input>
          <label htmlFor="Password" id="pwd">Paasword</label><br />
          <input type="password" /><br />
          <button>Sign up</button><button>Cancel</button>
        </legend>
      </fieldset>
    </form>
  </div>
  )
}

export default Signup
