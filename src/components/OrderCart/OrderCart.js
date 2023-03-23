import { faArrowRightLong, faDeleteLeft, faTrash, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './OrderCart.css';

const OrderCart = ({ cart, clearCart }) => {

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + (product.price * product.quantity);
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 0.1;
    const grandTotalprice = totalPrice + shipping + tax;

    return (
        <div className='order-cart-container'>
            <div className='order-cart'>
                <h3 className='order-cart-summary'>Order Summay</h3>
                <div className='order-cart-summary-details'>
                    <p>Select item : {quantity}</p>
                    <p>Total price : ${totalPrice}</p>
                    <p>Total Shipping Charage : ${shipping}</p>
                    <p>Tax : ${tax.toFixed(2)}</p>
                    <h3 className='grand-total'>Grand Total : ${grandTotalprice.toFixed(2)}</h3>
                </div>
                <div className='btn-order-cart'>
                    <p><button onClick={clearCart} className='btn-clear-order-cart'><small>Clear Cart</small><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></p>
                    <p><button className='btn-review-order-cart'><small className='btn-text'>Proceed Checkout</small><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></button></p>
                </div>
            </div>
        </div>
    );
};

export default OrderCart;