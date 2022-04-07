import React, { useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import '../Detail.css'


const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState();

    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
            console.log(id);
        setMovie(json.data.movie);

        console.log(json.data.movie.title);
    };
   
    useEffect(()=>{
        getMovie();
    },[])
  return (
    <div className='container'>
        <div className='imageCover'>
            <img src={movie.medium_cover_image} alt={movie.title_long}></img>
        </div>
        <div className='mTitle'>
            <h1>{movie.title}</h1>
        </div>
        <div className='mIntro'>
        <p>{movie.description_intro}</p>
        </div>
    </div>
  )
}

export default Detail