import React from 'react'
import College from './College'
function CollegeDash() {
    const state = ["Uttar Pradesh", "Haryana", "Madhya pradesh", "Maharashtra", "Andhra Pradesh", "Assam", "Jharkhand"]

    return (

        state.map(item => (
            <>
                <h1 className="headbar">Colleges in {item}</h1>
                <College state={item} />
            </>
        ))



    )
}

export default CollegeDash
