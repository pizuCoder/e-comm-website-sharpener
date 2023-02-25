import React from "react"
import StoreItem from "./StoreItem"
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import coverImage from '../../src/assets/headerImg.jpeg'
import { Image } from "react-bootstrap";
const Store = () => {
    const productsArr = [

        {
        id: 'p1',
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
            id: 'p2',
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        id: 'p3',
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {

        id: 'p4',
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
        const productList = productsArr.map((product) => {
            return (
                <Col>
                <ul>
            <StoreItem 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}

            />
            </ul>
            </Col>
            )

        })
        return(
            <>
            <div 
                style={{width: "100%", height: "15rem",zIndex: "0",
                    overflow: "hidden"}}>
                <Image src={coverImage}
                style={{width: "100%", height: "100%", objectFit:"cover"}} 
                alt="cover"/>
                </div>
                <div className="text-center">
                    <h1>The Store</h1>
                </div>
                <Container className="mt-3">
                    
                    <Row>
                        
                            {productList}
                        
                    </Row>
                    
                </Container>
            </>
        )
}

export default Store 