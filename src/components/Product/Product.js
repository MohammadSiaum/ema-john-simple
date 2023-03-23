import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {name, img, seller, price, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <div>
                   <p className='product-name'>{name}</p>
                   <p className='product-price'>Price : ${price}</p>
                </div>
                <div className='product-info-seller-and-ratings'>
                   <p><small>Seller : {seller}</small></p>
                   <p><small>Ratings : {ratings}</small></p>
                </div>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>



        </div>
    );
};

export default Product;