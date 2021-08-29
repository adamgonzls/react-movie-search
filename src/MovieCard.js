import React from 'react'

function MovieCard (props) {
  const { movie } = props
  return (
    <div className='card'>
      <img
        className='card__image'
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='card__content'>
        <h3 className='card__title'>{movie.title}</h3>
        <p>
          <small>Release Date: {movie.release_date}</small>
        </p>
        <p>
          <small>Rating: {movie.vote_average}</small>
        </p>
        <p className='card__desc'>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard
