import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

let ratingStar = 'https://static.vecteezy.com/system/resources/thumbnails/000/380/404/small/Basic_Elements__28175_29.jpg'

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{ basket }, dispatch] = useStateValue(); 

    const removeFromBasket = () => {
        //remove the item from the basket 
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image"  src={image} 
            />

            <div className='checkoutProduct__info'> 
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => <img src={ratingStar} alt='rating stars' className='product__rating'/> )}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove From Basket</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
