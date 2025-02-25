import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import UpdateStudentdata from "./UpdateStudentdata";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ViewStudents = () => {
  let [studentData, setStudentdata] = useState([]);
  useEffect(() => {
    let x = axios
      .get("http://localhost:4000/posts")
      .then(({ data }) => setStudentdata(data));
  }, []);

  return (
    <div>
      <h1 id="viewhd">View Student data</h1>
      <div className="viewStudentData">
        {studentData.map((x) => {
          return (
            <>
              <div className="student-card">
                <div className="student-name">
                  {" "}
                  <h3>{x.stdname}</h3>
                </div>
                <div className="student-email">
                  {" "}
                  <h3> {x.stdEmail}</h3>
                </div>
                <div className="student-course">
                  <h3> {x.stdCourse}</h3>
                </div>
                <button>
                  <Link to={`/UpdateStudentdata/${x.id}`}>Update</Link>
                </button>
                {/* <button>Delete</button> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ViewStudents;
