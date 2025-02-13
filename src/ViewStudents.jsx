import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const ViewStudents = () => {
  let [studentData, setStudentdata] = useState([]);
  useEffect(() => {
    let x = axios
      .get("http://localhost:4000/posts")
      .then(({ data }) => setStudentdata(data));
  }, []);

  return (
    <>
      <h1 id="viewhd">View Student data</h1>
      <div className="viewStudentData">
        {studentData.map((x) => {
          return (
            <>
              <div className="student-card">
                <div className="student-name">
                  {" "}
                  <h1>{x.stdname}</h1>
                </div>
                <div className="student-email">
                  {" "}
                  <h1> {x.stdEmail}</h1>
                </div>
                <div className="student-course">
                  <h1> {x.stdCourse}</h1>
                </div>
                <button ><Link to="{UpdateStudentdata}" ></Link>Update</button><button>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ViewStudents;
