import CartItem from "./CartItem"
import Modal from 'react-bootstrap/Modal';
import React from "react";
import Button from 'react-bootstrap/Button'


export default function CartModal(props){
    const cartElements = [

        {

        id:'p1',
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
            id:'p2',
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {

        id:'p3',
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
    ]
    function removeHandler(){
        console.log('removed')
    }

    const CartItems = cartElements.map(item =>{
        return(
            <CartItem 
                key = {item.id}
                imageUrl = {item.imageUrl}
                title = {item.title}
                price = {item.price}
                quantity = {item.quantity}
                removeHandler = {removeHandler}
                

            />
        )
    })
    return (
      <Modal show={props.showCart} onHide={props.handleClose} backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign: "center"}}>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display: "flex",
            justifyContent:"space-between",}}>
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          </div>
          {CartItems}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Purchase</Button>
        </Modal.Footer>
      </Modal>
    );
  
}