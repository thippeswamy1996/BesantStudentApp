import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateStudentdata = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [course, setCourse] = useState("");

  // Fetch student data when component loads
  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts/${id}`)
      .then(({ data }) => {
        setName(data.stdname);
        setEmail(data.stdEmail);
        setCourse(data.stdCourse);
      })
      .catch((error) => console.error("Error fetching student data:", error));
  }, [id]);

  // Handle Update Student
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/posts/${id}`, {
        stdname: name,
        stdEmail: email,
        stdCourse: course,
      })
      .then(() => {
        toast.success("Student updated successfully!", { position: "top-right" });
        navigate("/view-students"); // Redirect after update
      })
      .catch((error) => console.error("Error updating student data:", error));
  };

  // Handle Delete Student
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      axios
        .delete(`http://localhost:4000/posts/${id}`)
        .then(() => {
          toast.error("Student deleted successfully!", { position: "top-right" });
          navigate("/view-students"); // Redirect after deletion
        })
        .catch((error) => console.error("Error deleting student data:", error));
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleUpdate}>
        <fieldset>
          <legend>Update Student Data</legend>

          <label htmlFor="name">Student Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label htmlFor="course">Course</label>
          <br />
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <br />

          <button type="submit">Update</button>
          <button type="button" onClick={handleDelete} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>Delete</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateStudentdata;
