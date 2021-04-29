import React from 'react'
import '../Institue/institute.css'
import { useParams } from "react-router-dom";
function Institute() {
    const { id } = useParams();
    return (
        <div>
            <section class="about" id="about">
                <div class="container">
                    <div class="heading text-center">
                        <h2>College
                        <span>Name</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                    <div class="rowcol">
                        <div class="col-lg-6">
                            <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" class="img-fluid" />
                        </div>

                        <div class="col-md-6">
                            <div class="col-md-7">
                                <h3>About the Institution </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>                                    
                                    <div class="col-md-6">
                                        <h4>
                                          <i class="far fa-star"></i>College ID : 12301371</h4>
                                    </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>College_Name : College4</h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>
                                    Year founded : 2002</h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>City,State</h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>
                                    No of Students : 100 </h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>
                                    Courses offered</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Institute
