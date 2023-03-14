import React from 'react'
import Button from 'react-bootstrap/Button';

export default function CartItem(props){
    return(
        <div className="cartItem" style={{
            display: "flex",
            justifyContent:"space-between",
            marginBottom: "1rem",
        }}>
            <img src={props.imageUrl} alt="cartItem" style={{width: "8rem", borderRadius: "0.5rem"}}/>
            <p>{props.title}</p>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
            <Button variant="danger" onClick={props.removeHandler} style={{height: "3rem"}}>remove</Button>
        </div>
    )

}