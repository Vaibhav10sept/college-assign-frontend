import React from 'react'
import Courses from '../Courses/Course'
import Graph from '../Graph/Graph'
import Institute from '../Institue/Institute'
import Table from '../Table/Table'
import User from '../User/User'
import Slide from 'react-reveal/Slide';
import './dash.css'
import StudentDash from '../Courses/CourseDash'

import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  useHistory,
  Link,
  NavLink
} from "react-router-dom";
import CollegeDash from '../College/CollegeDash'
import Landing from '../landing/Landing'

function Dash() {
  return (
    <div>

      <div class="dashbody">
        <input type="checkbox" id="mobilmenu" />
        <div class="sidebar">
          <Link to="/">
          <div class="logo"><i class="fa fa-shopping-bag"></i><h2>Welcome User</h2></div></Link>
          <div class="menu">
            <Slide top cascade>
              <ul>

                <NavLink activeStyle={{color: 'red!important'}} to="/state" className="Nav_link" > <li class="rout"> <i class="fa fa-home"></i>  State</li></NavLink>

                <NavLink activeStyle={{color: 'red!important'}} to="/course" className="Nav_link" >  <li class="rout">  <i class="fa fa-home"></i>    Courses</li></NavLink>
                <NavLink activeStyle={{color: 'red!important'}} to="/chart" className="Nav_link" >     <li class="rout">  <i class="fa fa-home"></i>     Charts</li></NavLink>
                <NavLink to="/state" className="Nav_link" > <li class="rout"> <i class="fa fa-home"></i>   State</li></NavLink>

                <NavLink to="/course" className="Nav_link" >  <li class="rout">  <i class="fa fa-home"></i>    Courses</li></NavLink>
                <NavLink to="/chart" className="Nav_link" >     <li class="rout">  <i class="fa fa-home"></i>     Charts</li></NavLink>





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
          <Switch>
          <Route exact path="/" component={Landing} />

            <Route exact path="/state" component={CollegeDash} />
            <Route exact path="/course" component={StudentDash} />
            <Route exact path="/chart" component={Graph} />
            <Route exact path="/college/:id" component={Institute} />

           
          </Switch>
          {/* <College />
        <Graph />
        <User />
        <Institute />
        <Courses /> */}
        </div>

      </div>

    </div >
  )
}

export default Dash
