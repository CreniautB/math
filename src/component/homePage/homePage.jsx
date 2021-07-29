import React from 'react'
import _ from "lodash";
import './homePage.css'

function HomePage()  {

    

    return ( 

        <div className="homePage">
            {_.times(10, (i) => (
            <h1 key={i}>list {1}</h1>
        ))}
        </div>
    )}
        
export default HomePage
