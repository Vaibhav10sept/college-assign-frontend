import React from 'react'
import Courses from '../Courses/Courses'
import Graph from '../Graph/Graph'
import Institute from '../Institue/Institute'
import Table from '../Table/Table'
import User from '../User/User'
import Slide from 'react-reveal/Slide';
import './dash.css'
function Dash() {
    return (
        <div>
            <div class="dashbody">
      <input type="checkbox" id="mobilmenu" />
      <div class="sidebar">
        <div class="logo"><i class="fa fa-shopping-bag"></i><h2>Welcome User</h2></div>
        <div class="menu">
        <Slide top cascade>
          <ul>
            <li> <i class="fa fa-home"></i>Student1</li>
            <li> <i class="fa fa-home"></i>Student1</li>
            <li> <i class="fa fa-home"></i>Student1</li>
            <li> <i class="fa fa-home"></i>Student1</li>
            <li> <i class="fa fa-home"></i>Student1</li>
            <li> <i class="fa fa-home"></i>Student1</li>
            <li> <i class="fa fa-home"></i>Student1</li>

          </ul>
          </Slide>
        </div>
      </div>
      <label id="mmenu" for="mobilmenu">
        <i class="fa fa-bars"></i>
        <i class="fa fa-times"></i>
      </label>
      <div class="icerik">
        <div class="ust">
          <div class="ara">
            <input type="text" placeholder="Search Product" />
            <i class="fa fa-search"></i>
          </div>
          <div class="kullanıcı">
            <i class="fas fa-wallet"></i>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <label style={{ position: "relative" }} >
              <i id="bildirim" class="fa fa-bell" aria-hidden="true"></i>
            </label>
            <span>Vaibhav Tiwari</span>
            <i class="fas fa-chevron-down"></i>

          </div>
        </div>
        <Table/>
        <Graph/>
        <User/>
        <Institute/>
        <Courses/>
      </div>
   
    </div>
    
        </div>
    )
}

export default Dash
