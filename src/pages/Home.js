import React from 'react'
import MovieList from '../components/MovieList'
import Navbar from '../components/Navbar'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Typography variant='h5' style={{padding:"20px 50px"}}>Movie List From 01-12-2023 - 31-12-2023 </Typography>
      <MovieList/>
    </>
  )
}

export default Home
