import React from 'react'
import {postApi} from "../api/Api";
import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import Layout from "../components/layout/Layout";
import SearchIcon from '../assets/search_icon.svg';
import {  Row, Col, Spinner, Button, Alert, InputGroup, Form } from "react-bootstrap";

import MovieCard from '../components/ui/MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=1589e30';
type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
const Movies = () => {
  // const searchMovies=async (title)=>{
  //     const response= await fetch(`${API_URL}&s=${title}`);
  //     const data = await response.json();
  //     console.log(data.Search)
  // }
  // useEffect(()=>{
  //   searchMovies('spiderman');
  // }, [])

  const [listOfVideos, setListOfVideos] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (title: string) => {
    try {
      setLoading(true);
      const response: { data: { Search: Movie[] } } = await postApi.get(`${API_URL}&s=${title}`);
      console.log(response.data.Search);
      setListOfVideos(response.data.Search);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies("spiderman");
  }, []);
  return (
     <Layout>
      <Container>
         <h2 className="my-4">Welcome to the MoviesHub</h2>
        <p>Search for your favorite movies and explore the world of cinema.</p>
        <InputGroup className="mb-4">
          <Form.Control
            placeholder="Search for Movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
          />
          <Button variant="outline-secondary" onClick={() => fetchMovies(searchTerm)}>
            <img src={SearchIcon} alt="search" style={{ width: 20, height: 20 }} />
          </Button>
        </InputGroup>
        
        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
            <p>Loading posts...</p>
          </div>
        ) : listOfVideos.length === 0 ? (
          <Alert variant="warning">No Videos Found</Alert>
        ) : (
          <Row>
            {listOfVideos.map((video) => (
              <Col key={video.imdbID} md={4}>
             
               <MovieCard video={video} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Layout>
  )
}

export default Movies