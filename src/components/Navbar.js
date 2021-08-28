import React from 'react'
import '../css/Navbar.css'
import { FcFilmReel , FcSearch} from "react-icons/fc";

export default function Navbar() {
    return (
        <div className="Navbar-container">
            <FcFilmReel size="100px" />
            <div className="heading"><h1>WOOKIE <br/>MOVIES</h1></div>
           <div className="searchbar">  <button>search</button> <input type="text" placeholder="enter movie name"/> </div>
           
        </div>
    )
}
