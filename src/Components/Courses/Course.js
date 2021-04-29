



import React, { useEffect, useState } from "react";
import '../College/college.css'
import Fade from 'react-reveal/Fade';
import axios from "axios";
import { useHistory } from "react-router-dom";
function Course({course}) {
  const [fetcheddata, setfetcheddata] = useState();
  const history = useHistory();
  React.useEffect(() => {

  
    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/college/course/${course}`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("data", fetcheddata);
      })
      .catch((err) => {
        console.log("blog error", err);
      });
 
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
              <div class="College_row" onClick={()=> { history.push(`/college/${item._id}`);}}>
                <div class="College_cell" data-title="ID">
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
                <div class="College_cell" data-title="Country">
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

export default Course












// import React from 'react'
// import '../Courses/courses.css'
// function Courses() {
//     return (
//         <div>
//               <div class="blog-card">
//     <div class="meta">
//       <div class="photo" style={{backgroundimage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"}}></div>
//       <ul class="details">
//         <li class="author"><a href="#">John Doe</a></li>
//         <li class="date">Aug. 24, 2015</li>
//         <li class="tags">
//           <ul>
//             <li><a href="#">Learn</a></li>
//             <li><a href="#">Code</a></li>
//             <li><a href="#">HTML</a></li>
//             <li><a href="#">CSS</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//     <div class="description">
//       <h1>Learning to Code</h1>
//       <h2>Opening a door to the future</h2>
//       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
//       <p class="read-more">
//         <a href="#">Read More</a>
//       </p>
//     </div>
//   </div>
//   <div class="blog-card alt">
//     <div class="meta">
//       <div class="photo" style={{backgroundimage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"}} ></div>
//       <ul class="details">
//         <li class="author"><a href="#">Jane Doe</a></li>
//         <li class="date">July. 15, 2015</li>
//         <li class="tags">
//           <ul>
//             <li><a href="#">Learn</a></li>
//             <li><a href="#">Code</a></li>
//             <li><a href="#">JavaScript</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//     <div class="description">
//       <h1>Mastering the Language</h1>
//       <h2>Java is not the same as JavaScript</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
//       <p class="read-more">
//         <a href="#">Read More</a>
//       </p>
//     </div>
//   </div>
//         </div>
//     )
// }

// export default Courses
