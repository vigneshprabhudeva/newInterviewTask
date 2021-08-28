import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';

export default function Sample() {
    const Movieinfo=useSelector(state=>state.movieInfo)
    let [data,setdata]=useState([""])
    useEffect(()=>{
   
    setdata(JSON.parse(localStorage.getItem("movie")))
    console.log(Movieinfo)

    },[])
    return (
        <div className="movie-info">
            <h2>{Movieinfo.title}</h2>
            <img src={Movieinfo.poster} alt="movie"/>
            <p>director:{Movieinfo.director}</p>
            <p>idbm rating:{Movieinfo.imdb_rating}</p>
            <h3>{Movieinfo.overview}</h3>
        
       
    </div>
    )
}
