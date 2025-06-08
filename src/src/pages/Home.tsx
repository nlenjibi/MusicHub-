import {postApi} from "../api/Api";
import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import Layout from "../components/layout/Layout";
import { Card, Row, Col, Spinner, Button, Alert } from "react-bootstrap";
import type { Post } from "../types/index";
const Home = () => {
 

  const [listOfPosts, setListOfPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postApi.get("/")
      .then((response: { data: Post[] }) => {
        setListOfPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Container>
        <h2 className="my-4">Welcome to the Home Page</h2>
        <p>This is a basic layout using React-Bootstrap Card with Header and Footer.</p>

        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
            <p>Loading posts...</p>
          </div>
        ) : listOfPosts.length === 0 ? (
          <Alert variant="warning">No Posts Found</Alert>
        ) : (
          <Row>
            {listOfPosts.map((post) => (
              <Col md={4} key={post.id} className="mb-4">
                <Card className="text-center h-100">
                  <Card.Header>Posted by: {post.username}</Card.Header>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.postText}</Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                  <Card.Footer>
                    {new Date(post.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }).replace(/ /g, ' ')}
                    {" "}
                    {new Date(post.createdAt).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
