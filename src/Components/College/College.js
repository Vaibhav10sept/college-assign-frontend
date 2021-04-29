import React, { useEffect, useState } from "react";
import '../College/college.css'
import Fade from 'react-reveal/Fade';
import axios from "axios";
function College() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogdata, setblogdata] = useState();

  React.useEffect(() => {
    const state = "jharkhand"
    setIsLoading(true);
    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/college/state/${state}`)
      .then((res) => {
      setblogdata(res.data);
       console.log("data",blogdata);
      })
      .catch((err) => {
        console.log("blog error", err);
      });
    // console.log("response is: "+response);
    setIsLoading(false);
  }, []);
  return (
    <div className="College_container">
      <div class="College_wrapper">
        <Fade left cascade>
          <div class="College_table">

            <div class="College_row College_header">
              <div class="College_cell">
                ID
      </div>
              <div class="College_cell">
                Name
      </div>
              <div class="College_cell">
                Year Founded
      </div>
              <div class="College_cell">
                City
      </div>
              <div class="College_cell">
                State
      </div>
              <div class="College_cell">
                Country
      </div>

              <div class="College_cell">
                Courses
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>
            <div class="College_row">
              <div class="College_cell" data-title="Name">
                100100101
      </div>
              <div class="College_cell" data-title="Age">
                College1
      </div>
              <div class="College_cell" data-title="Occupation">
                2009
      </div>
              <div class="College_cell" data-title="Location">
                Kanpur
      </div>
              <div class="College_cell" data-title="Location">
                Uttar Pradesh
      </div>
              <div class="College_cell" data-title="Location">
                India
      </div>

              <div class="College_cell" data-title="Location">
                CS,ECE,IT,MECH
      </div>
            </div>



          </div>
        </Fade>
      </div>
    </div>
  )
}

export default College
