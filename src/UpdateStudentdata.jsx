import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav"
import AddStudent from "./AddStudent"
import  ViewStudents from "./ViewStudents"

const UpdateStudentdata = () => {
  return (<div>
  <ToastContainer />
  <form action="">
    <fieldset>
      <legend>Add Student Data</legend>
      <label htmlFor="">Student Name</label>
      <br></br>
      <input
        type="text"
        id="name"
        // onChange={(e) => {
        //   {
        //     (e.target.value);
        //   }
        // }}
      ></input>
      <label htmlFor="Email">Email</label>
      <br></br>
      <input
        type="text"
        id="Email"
        // onChange={(e) => {
        //   {
        //     (e.target.value);
        //   }
        // }}
      ></input>
      <label htmlFor="course">Couser</label>
      <br></br>
      <input
        type="text"
        id="course"
       
      ></input>
      <br></br>
      <button >UpdateStudentdata</button>
    </fieldset>
  </form>
</div>
);
}

export default UpdateStudentdata
