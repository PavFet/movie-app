import React from 'react'
import './searchFilmInput.scss'
import { fetchMovie } from '../../../features/fetch'
import { useAppDispatch } from '../../../features/hooks'


const SearchFilmInput = () => {
  const disp = useAppDispatch();

  const searchMovie: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const movieInput = (e.target as HTMLFormElement).elements.namedItem('movie') as HTMLInputElement | null;
    if (movieInput) {
      const movie = movieInput.value;

      fetchMovie(movie, disp)

      movieInput.value = '';
    }
  };

  return (
    <div className='search__block'>
      <form onSubmit={searchMovie}>
        <input 
          type="text" 
          name="movie"
          placeholder='Search film'
        />
        <button 
          type='submit'
        >&#9740;</button>
      </form>
    </div>
  );
};

export default SearchFilmInput;

