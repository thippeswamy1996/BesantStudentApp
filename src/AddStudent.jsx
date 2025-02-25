import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();
  const [stdname, setStudentdata] = useState("");
  const [stdEmail, setstdEmail] = useState("");
  const [stdCourse, setstdCourse] = useState("");

  const HandleForm = (e) => {
    e.preventDefault();
    const payLoad = { stdname, stdEmail, stdCourse };

    axios
      .post("http://localhost:4000/posts", payLoad)
      .then(() => {
        toast.success(`${stdname} is Added successfully!`, {
          position: "top-right",
        });
        navigate("/ViewStudents"); // Redirect after success
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        toast.error("Failed to add student. Please try again.", {
          position: "top-right",
        });
      });
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={HandleForm}>
        <fieldset>
          <legend>Add Student Data</legend>

          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            id="name"
            value={stdname}
            onChange={(e) => setStudentdata(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={stdEmail}
            onChange={(e) => setstdEmail(e.target.value)}
            required
          />

          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            value={stdCourse}
            onChange={(e) => setstdCourse(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddStudent;
