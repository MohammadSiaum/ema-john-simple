import { faTrash, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewCart.css';
const ReviewCart = ({product, handleRemoveItem}) => {
    const {name, img, price, quantity, id} = product;
    console.log(product);
    return (
        <div className='review-item'>
            <div className='review-item-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className='review-item-details'>
                    <p className='item-name'>{name}</p>
                    <p className='item-price'><small>Price : ${price}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className='btn-review-item'>
                    <button onClick={()=>handleRemoveItem(id)}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;