import React from 'react'
import './movieCard.scss'
import MovieRating from './movieRating/MovieRating'
import arrowSvg from '../../../svg/svg'
import MovieDiscExtension from './movieDiscExtension/MovieDiscExtension'

const MovieCard = (props: any) => {
  const [openMovieExtension, setOpenMovieExtension] = React.useState(false)

  return (
    <div className="movie__card">
      <div className="movie__poster">
        <img src={props.Poster} alt={props.Title} />
      </div>
      <div className="movie__disciption">
        <div className="movie__title">
          <h3>{props.Title} ({props.Year})</h3>
        </div>
        
        <div className="movie__duration__genre">
          <span>{props.Runtime} | {props.Genre}</span>
        </div>

        <div className="movie__rating">
          <MovieRating rating={props.imdbRating}></MovieRating>
        </div>

        <div className="movie__actors">
          <p>Cast: {props.Actors}</p>
        </div>

        <div className="movie__plot">
          <p>Plot: {props.Plot}</p>
        </div>

        <div className="movie__disc__expansion">
          <button onClick={() => setOpenMovieExtension(!openMovieExtension)}>
            {!openMovieExtension ? arrowSvg.down : arrowSvg.up}
          </button>
          <div className={openMovieExtension ? "animation--showUp" : ''}>
            {openMovieExtension ? <MovieDiscExtension {...props}></MovieDiscExtension> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard

