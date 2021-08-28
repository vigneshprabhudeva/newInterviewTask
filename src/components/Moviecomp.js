import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import '../css/Moviecomp.css'
import { useHistory } from "react-router-dom";
import { useStore,useDispatch,useSelector } from 'react-redux';

export default function Moviecomp(movie) {
    const dispatch=useDispatch()
    const store=useStore()
    let history = useHistory();
    let [data,setdata]=useState([""])
    let [genre,setgenre]=useState([""])
    let Action=[]
    let Crime=[]
    let Drama=[]
    let Animation=[]
    let Adventure=[]
    let Family=[]
    let Thriller=[]
    let Biography=[]
    let History=[]
    let SciFi=[]
    let Romance=[]
    let War=[]
    
    let Mystery=[]

    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://wookie.codesubmit.io/movies',
            headers: { 
              'Authorization': 'Bearer Wookie2019'
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data.movies);
            setdata(response.data.movies)
            

          })
          .catch(function (error) {
            console.log(error);
          });

         

    },[])

    
     if(data){

        data.map(function(val){
            if(val.genres){

                val.genres.map(function(val2){
                    if(val2=="Action"){
                        Action.push(val)
                    }else if(val2=="Crime"){
                        Crime.push(val)
        
                    }else if(val2=="Drama"){
                        Drama.push(val)
                        
                    }else if(val2=="Animation"){
                        Animation.push(val)
                        
                    }else if(val2=="Adventure"){
                        Adventure.push(val)
                        
                    }else if(val2=="Family"){
                        Family.push(val)
                        
                    }else if(val2=="Thriller"){
                        Thriller.push(val)
                        
                    }else if(val2=="Biography"){
                        Biography.push(val)
                        
                    }else if(val2=="History"){
                        History.push(val)
                        
                    }else if(val2=="Sci-Fi"){
                        SciFi.push(val)
                    }else if(val2=="Romance"){
                        Romance.push(val)
                        
                    }else if(val2=="War"){
                        War.push(val)
                        
                    }else if(val2=="Mystery"){
                        Mystery.push(val)
                        
                    }
                })


            }

            
        })


     }
  
    console.log("Action")
    console.log(Action)

    function movie(params) {
        console.log("hiiiii")
     
        dispatch({type:"save",movieInfo:params})
        console.log(store.getState().movieInfo)
        history.push("/info");
        
    }

    
         

    

    
    
    
      
    return (<><h1>Action</h1><br/>
        <div className="genre">
            
            {Action.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div className="subtitles">{val.title}</div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Crime</h1>
        <div className="genre">
            {Crime.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div className="subtitles">{val.title}</div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Drama</h1><br/>
        <div className="genre">
            {Drama.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Animation</h1><br/>
        <div className="genre">
            {Animation.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Adventure</h1><br/>
        <div className="genre">
            {Adventure.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Family</h1><br/>
        <div className="genre">
            {Family.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Thriller</h1><br/>
        <div className="genre">
            {Thriller.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Biography</h1><br/>
        <div className="genre">
            {Biography.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>History</h1><br/>
        <div className="genre">
            {History.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Sci-Fi</h1><br/>
        <div className="genre">
            {SciFi.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Romance</h1><br/>
        <div className="genre">
            {Romance.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>War</h1><br/>
        <div className="genre">
            {War.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        <h1>Mystery</h1><br/>
        <div className="genre">
            {Mystery.map(function(val){
                
                return(<div className="card" onClick={()=>{movie(val)}}>
                    <img src={val.backdrop} className="img" style={{height:"150px"}} />
                    <div><span>{val.title}</span></div>
                    <div className="rating">
                    <div>imdb:{val.imdb_rating}</div>
                    <div>{val.classification}</div>
                    
                    
                    </div>
                    
                </div>)
            })}
            
        </div>
        </>
    )
}
