import React from 'react'
import '../css/Homepage.css'
import Moviecomp from './Moviecomp'

export default function Homepage() {
    function movie(params) {
        
    }
    return (
        <div className="Homepage-container">
            <div className="genre-1">
                <Moviecomp movie={movie()}/>
                

            </div>
            
            
        </div>
    )
}
