import React from 'react'
import { useEffect,useState } from 'react'

export default function Sample() {
    let [data,setdata]=useState([""])
    useEffect(()=>{
   
    setdata(JSON.parse(localStorage.getItem("movie")))
    console.log(data)

    },[])
    return (
        <div className="movie-info">
            <h2>{data.title}</h2>
            <img src={data.poster} alt="movie"/>
            <p>director:{data.director}</p>
            <p>idbm rating:{data.imdb_rating}</p>
            <h3>{data.overview}</h3>
        
       
    </div>
    )
}
