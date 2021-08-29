import React, { useState } from 'react'
import MovieCard from './MovieCard'

function SearchMovies () {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()

    const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&&include_adult=false`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label htmlFor='query' className='label'>
          Movie Name
        </label>
        <input
          id='query'
          className='input'
          type='text'
          name='query'
          value={query}
          placeholder='i.e. Batman'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies
          .filter(
            (movie) => movie.poster_path
          )
          .map(
            (movie) => (
              <MovieCard key={movie.id} movie={movie} />
            )
          )}
      </div>
    </>
  )
}

export default SearchMovies
