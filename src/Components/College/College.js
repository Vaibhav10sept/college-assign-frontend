import React, { useEffect, useState } from "react";
import '../College/college.css'
import Fade from 'react-reveal/Fade';
import axios from "axios";
import { useHistory } from "react-router-dom";
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";

function College({state,collegeId}) {
  const [fetcheddata, setfetcheddata] = useState();

  const history = useHistory();



  React.useEffect(() => {
  if(state){
    axios
    .get(`https://nutty-pocket-worm.cyclic.app/api/college/state/${state}`)
    .then((res) => {
      setfetcheddata(res.data);
      console.log("data", fetcheddata);
    })
    .catch((err) => {
      console.log("blog error", err);
    });
  }
  if(collegeId) {
    axios
    .get(`https://nutty-pocket-worm.cyclic.app/api/college/similarCollege/${collegeId}`)
    .then((res) => {
      setfetcheddata(res.data);
      console.log("data", fetcheddata);
    })
    .catch((err) => {
      console.log("blog error", err);
    });
  }
 
 
  }, []);
  return (
    <div className="College_container">
      <div class="College_wrapper">
        <Fade left cascade>
          <div class="College_table">

            <div class="College_row College_header" style={{cursor:"default"}}>
              <div class="College_cell">
                ID
      </div>
              <div class="College_cell">
                Name
      </div>
              <div class="College_cell">
                Year Founded
      </div>
              <div class="College_cell" style={{textTransform:"uppercase"}}>
                City
      </div>
              <div class="College_cell" style={{textTransform:"uppercase"}}>
                State
      </div>
              <div class="College_cell">
                Courses
      </div>
            </div>
            {fetcheddata ? fetcheddata.map((item) => (
              <div class="College_row" onClick={()=> { history.push(`/college/${item._id}`);window.location.reload();}}>
                <div class="College_cell" data-title="Id">
                  {item._id}
                </div>
                <div class="College_cell" data-title="Name">
                  {item.name}
                </div>
                <div class="College_cell" data-title="Year Founded">
                  {item.yearFounded}
                </div>
                <div class="College_cell" data-title="City">
                  {item.city}
                </div>
                <div class="College_cell" data-title="State">
                  {item.state}
                </div>
                <div class="College_cell" data-title="Courses">
                  {item.courses.map(cour=>(cour+", "))}
                </div>
                </div>
            )):<CubeGrid size="90px" color="#5443C3" />}


              </div>
        </Fade>
      </div>
      </div>
  )
}

export default College
