import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { defaultState, MovieState } from './types/movieType'
import { fetchMovieErrorType } from './types/fetchMovieErrorType'




const initialState = {
  defaultState,
  movieData: { ...defaultState},
  fetchMovieError: '',
}

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action:PayloadAction<MovieState>) => {
      const movieData = action.payload
      state.movieData = movieData
    },
    setFetchMovieError: (state, action:PayloadAction<string>) => {
      state.fetchMovieError = action.payload
    }
  }
})

export const { setMovie, setFetchMovieError } = MovieSlice.actions
