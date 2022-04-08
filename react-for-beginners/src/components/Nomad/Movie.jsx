import React from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import './Movie.css'

const Movie = ({id,coverImg,title,summary,genres}) => {
  return (
    <div className='container'>
      <div className='movie'>
        <div className="image">
          <img src={coverImg} alt={title}/>
        </div>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
        <p>MOVIE SUMMARY : {summary.length>235 ? `${summary.slice(0.235)}...`: summary}</p>
            MOVIE JANRE 
            <ul>
            {genres.map((g)=>(
                <li key={g}>
                {g}
                </li>
                ))}
            </ul>
    </div>
  </div>
  )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie