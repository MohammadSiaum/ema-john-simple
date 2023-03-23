import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import OrderCart from '../OrderCart/OrderCart';
import ReviewCart from '../ReviewCart/ReviewCart';

import './Orders.css';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='order-container'>
            <div className='order-product'>
                {
                    cart.map(product=><ReviewCart 
                        key={product.id} 
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                        ></ReviewCart>)
                }
                {
                    cart.length === 0 && <p className='order-no-item'>No items here. Please <Link to='/'>Buy now</Link></p>
                }

            </div>
            <div className='order-summary-cart'>
                <OrderCart 
                key={cart.id} 
                cart={cart}
                clearCart={clearCart}
                ></OrderCart>

            </div>
        </div>
    );
};

export default Orders;