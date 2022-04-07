import React from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const Movie = ({id,coverImg,title,summary,genres}) => {
  return (
    <div>
    <img src={coverImg} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>MOVIE SUMMARY : {summary}</p>
        MOVIE JANRE 
        {genres.map((g)=>(
            <li key={g}>
             {g}
            </li>
            ))}
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