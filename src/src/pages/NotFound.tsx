import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NotFound = () => {
 
return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <Card>
            <Card.Header>Page Not Found</Card.Header>
            <Card.Body>
                <Card.Title>Oops! That page doesn't exist.</Card.Title>
                <Card.Text>
                    The page you are looking for does not exist.
                    Please check the URL or return to the home page.
                </Card.Text>
                <Button href="/" variant="primary">Go home</Button>
            </Card.Body>
        </Card>
    </div>
);





}

export default NotFound