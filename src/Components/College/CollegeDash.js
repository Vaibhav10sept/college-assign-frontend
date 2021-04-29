import React from 'react'
import College from './College'
function CollegeDash() {
    return (
        <>
            <h1 className="headbox">Colleges in Jharkhand</h1>
            <College state="jharkhand" />
            <h1 className="headbox">Colleges in Assam</h1>
            <College state="assam" />
        </>
    )
}

export default CollegeDash
