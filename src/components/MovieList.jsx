import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const API_KEY = process.env.REACT_APP_API_KEY;
const startDate = "2023-12-01";
const endDate = "2023-12-31";
const page = 1;

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=${page}`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error, "error......");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", height: 400, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
