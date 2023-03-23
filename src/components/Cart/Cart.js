import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const {cart, clearCart, children} = props;
    
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        totalPrice = totalPrice + (product.price * product.quantity);
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    
    const tax = totalPrice * 0.1;
    const grandTotalprice = totalPrice + shipping + tax;
    
    const handleReview = ()=><Link to='/about'></Link>

    return (
        <div className='cart'>
            <h3 className='order-summay'>Order Summay</h3>
                <div className='order-summay-details'>
                    <p>Select item : {quantity}</p>
                    <p>Total price : ${totalPrice}</p>
                    <p>Total Shipping Charage : ${shipping}</p>
                    <p>Tax : ${tax.toFixed(2)}</p>
                    <h3 className='grand-total'>Grand Total : ${grandTotalprice.toFixed(2)}</h3>
                </div>
                <div className='btn-order'>
                    <p><button onClick={clearCart} className='btn-clear-cart'><small>Clear Cart</small><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button></p>
                    <p><Link to='/orders'><button className='btn-review-order'><small>Review Order</small><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button></Link></p>
                </div>
                {/* {children} */}
        </div>
    );
};

export default Cart;