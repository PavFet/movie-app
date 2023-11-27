import React from 'react'
import { UseAppDispatch, UseAppSelector } from "./hooks"
import { apiKey } from '../config/apiKey'
import { setMovie } from './movieSlice'


export const fetchMovie = (movie: string) => {
  const disp = UseAppDispatch()
  const fetchData = async () => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?t=${movie}&type=movie&apikey=${apiKey}`)
      const json = await res.json();
      disp(setMovie(
        json
      ))
      console.log(json)
    } catch (error) {
      console.log(error)
    }
   
  }
  fetchData()

}