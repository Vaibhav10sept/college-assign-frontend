import React, { useEffect, useState } from "react";
import './student.css'
import axios from "axios";
import Fade from 'react-reveal/Fade';
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";
import { useHistory } from "react-router-dom";

function Student({ collegeId }) {
  const [fetcheddata, setfetcheddata] = useState();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/student/college/${collegeId}`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("data", fetcheddata);
      })
      .catch((err) => {
        console.log("blog error", err);
      });

  }, []);
  return (
    <div className="Student_container">
      <div class="Student_wrapper">
        <Fade left cascade>
          <div class="Student_table">

            <div class="Student_row Student_header">
              <div class="Student_cell">
                ID
      </div>
              <div class="Student_cell">
                NAME
      </div>
              <div class="Student_cell">
                BATCH_YEAR
      </div>
              <div class="Student_cell">
                College_ID
      </div>
              <div class="Student_cell">
                SKILLS
      </div>

            </div>
            {fetcheddata ? <div class="Student_row">
              <div class="Student_cell" data-title="ID">
                {fetcheddata._id}
              </div>
              <div class="Student_cell" data-title="Name">
                {fetcheddata.name}
              </div>
              <div class="Student_cell" data-title="Batch Year">
                {fetcheddata.year}
              </div>
              <div class="Student_cell" data-title="College Id">
                {fetcheddata.collegeId}
              </div>
              <div class="Student_cell" data-title="Courses">
                {fetcheddata.skills}
              </div>

            </div> : <CubeGrid size="90px" color="#5443C3" />}
      

          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Student
