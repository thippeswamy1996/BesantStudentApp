import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  let navigate = useNavigate();
  let [stdname, setStudentdata] = useState("");
  let [stdEmail, setstdEmail] = useState("");
  let [stdCourse, setstdCourse] = useState("");

  let HandleForm = (e) => {
    e.preventDefault();
    let payLoad = {
      stdname,
      stdEmail,
      stdCourse,
    };

    axios.post("http://localhost:4000/posts", payLoad);

    navigate("ViewStudents");
    toast.success({ stdname }, " is Added successfully", {
      posittion: "top-right",
    });
  };

  return (
    <div>
      <ToastContainer />
      <form action="">
        <fieldset>
          <legend>Add Student Data</legend>
          <label htmlFor="">Student Name</label>
          <br></br>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              {
                setStudentdata(e.target.value);
              }
            }}
          ></input>
          <label htmlFor="Email">Email</label>
          <br></br>
          <input
            type="text"
            id="Email"
            onChange={(e) => {
              {
                setstdEmail(e.target.value);
              }
            }}
          ></input>
          <label htmlFor="course">Couser</label>
          <br></br>
          <input
            type="text"
            id="course"
            onChange={(e) => {
              setstdCourse(e.target.value);
            }}
          ></input>
          <br></br>
          <button onClick={HandleForm}>AddStudentData</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddStudent;
