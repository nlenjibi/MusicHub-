import React from 'react'
import { Card,  Button } from "react-bootstrap";
import NoImage from '../../assets/no_image.jpg';
interface MovieCardProps {
  video: {
    Poster: string;
    Title: string;
    Year: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ video }) => {
  return (
                <Card>
                  <Card.Img
                    variant="top"
                    src={video.Poster && video.Poster !== 'N/A' ? video.Poster : NoImage}
                    alt={video.Title}
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{video.Title}</Card.Title>
                    <Card.Text>Year: {video.Year}</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
  )
}

export default MovieCard