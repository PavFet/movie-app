import React from 'react'
import './main.scss'
import SearchFilmInput from '../searchFilm/SearchFilmInput'
import { fetchMovie } from '../../features/fetch'

// fetchMovie('evil')

const Main = () => {
  fetchMovie('saw')
  return (
    <>
      <div className='main__block'>
        <p >Log in to create your list of favorite movies.</p>
      </div>
      <SearchFilmInput></SearchFilmInput>
    </>
  )
}

export default Main