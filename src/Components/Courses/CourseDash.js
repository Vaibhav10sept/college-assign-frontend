import React from 'react'
import Course from './Course'
function CourseDash() {
    const state = ["uttar pradesh", "haryana", "madhya pradesh", "maharashtra", "andhra pradesh", "assam", "jharkhand"]
    const course = ["IT", "CSE", "ML", "M-TECH", "PHD", "HM", "BSC", "BCOM", "MCOM", "BA", "MA", "MSC"];
    return (
        <>
            <h1 className="headbar">Colleges that offers CSE</h1>
            <Course course="CSE" />
            <h1 className="headbar">Colleges that offers IT</h1>
            <Course course="IT" />
     

       </>
    )
}

export default CourseDash
