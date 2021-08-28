import React from 'react'

function SearchMovies () {
  const searchMovies = async (e) => {
    e.preventDefault()
    const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_KEY
    const query = 'Django Unchained'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&&include_adult=false`

    try {
      const response = await fetch(url)
      const movie = await response.json()
      console.log(movie)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      className='form'
      onSubmit={searchMovies}
    >
      <label
        htmlFor='query'
        className='label'
      >Movie Name
      </label>
      <input
        id='query'
        className='input'
        type='text'
        name='query'
        placeholder='i.e. Batman'
        onChange={console.log('click')}
      />
      <button
        className='button'
        type='submit'
      >Search
      </button>
    </form>
  )
}

export default SearchMovies
