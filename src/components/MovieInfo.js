import React from 'react'
import { useEffect,useState } from 'react'
import { useStore,useDispatch,useSelector } from 'react-redux';

export default function MovieInfo() {
    const Movieinfo=useSelector(state=>state.MovieInfo)

    let [data,setdata]=useState([""])
    useEffect(()=>{
        console.log(Movieinfo)
   
    setdata(JSON.parse(localStorage.getItem("movie")))
    console.log(data)

    },[])
    
    return (
        <div className="movie-info">
            <h1>{data.title}</h1>
             <img src={data.poster} className="img-det" style={{height:"300px"}} />
             <p>{data}</p>
           
        </div>
    )
}
