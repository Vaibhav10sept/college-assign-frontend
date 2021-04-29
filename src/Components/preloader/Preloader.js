import React from 'react'
import { CubeGrid } from "styled-loaders-react";
import './preloader.css';
function Preloader() {
    return (
        <div className="preloader">
        <div>
          {" "}
          <br />
          <CubeGrid size="90px" color="#F5965C" />
        </div>
      </div>
    )
}

export default Preloader
