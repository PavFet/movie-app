import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface Rating {
  Source: string,
  Value: string,
}

interface MovieState {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: Array<Rating>,
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string,
}

const defaultState: MovieState = {
  Title: "",
  Year: "",
  Rated: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Awards: "",
  Poster: "",
  Ratings: [],
  Metascore: "",
  imdbRating: "",
  imdbVotes: "",
  imdbID: "",
  Type: "",
  DVD: "",
  BoxOffice: "",
  Production: "",
  Website: "",
  Response: "",
}

const initialState = {
  defaultState,
  movieData: { ...defaultState},
}

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action:PayloadAction<MovieState>) => {
      const movieData = action.payload
      state.movieData = movieData
    }
  }
})

export const { setMovie } = MovieSlice.actions