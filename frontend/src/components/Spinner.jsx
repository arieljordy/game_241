import React from 'react'
import "../assets/css/component-spinner.css"

export default function Spinner({visibility}){

    return(
        <>
            <div className={`ma-main my-container-spinner ${visibility?"visibility-visible":"visibility-hidden"}`}>
                <div className="👉"></div>
                <div className="👉"></div>
                <div className="👉"></div>
                <div className="👉"></div>
                <div className="🌴"></div>		
                <div className="👍"></div>
            </div>
        </>
    )
}
