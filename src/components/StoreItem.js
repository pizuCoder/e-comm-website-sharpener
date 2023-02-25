import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const StoreItem =(props)=> {
    return(
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imageUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {`Price: ${props.price}`}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        
    ) 
}

export default StoreItem;