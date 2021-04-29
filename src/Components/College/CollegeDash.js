import React from 'react'
import College from './College'
function CollegeDash() {
    return (
        <>
            <h1 className="headbar">Colleges in Jharkhand</h1>
            <College state="jharkhand" />
            <h1 className="headbar">Colleges in Assam</h1>
            <College state="assam" />
        </>
    )
}

export default CollegeDash
