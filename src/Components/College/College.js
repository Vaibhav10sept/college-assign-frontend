import React, { useEffect, useState } from "react";
import '../College/college.css'
import Fade from 'react-reveal/Fade';
import axios from "axios";
function College() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetcheddata, setfetcheddata] = useState();

  React.useEffect(() => {
    const state = "jharkhand"
    setIsLoading(true);
    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/college/state/${state}`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("data", fetcheddata);
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
            {fetcheddata ? fetcheddata.map((item) => (
              <div class="College_row">
                <div class="College_cell" data-title="Name">
                  {item._id}
                </div>
                <div class="College_cell" data-title="Age">
                  {item.name}
                </div>
                <div class="College_cell" data-title="Occupation">
                  {item.yearFounded}
                </div>
                <div class="College_cell" data-title="Location">
                  {item.city}
                </div>
                <div class="College_cell" data-title="Location">
                  {item.state}
                </div>
                <div class="College_cell" data-title="Location">
                  India
            </div>

                <div class="College_cell" data-title="Location">
                  {item.courses.map(cour=>(cour+", "))}
                </div>
                </div>
            )):<h2>loading...</h2>}


              </div>
        </Fade>
      </div>
      </div>
  )
}

export default College
