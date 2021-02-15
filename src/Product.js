import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"

let ratingStar = 'https://static.vecteezy.com/system/resources/thumbnails/000/380/404/small/Basic_Elements__28175_29.jpg'

function Product({id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue(); 

    const addToBasket = () => {
        //dispatch the item into the basket 
        dispatch({
            type: 'ADD_TO_BASKET', 
            item: {
                id, 
                title, 
                image, 
                price, 
                rating
            }
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p> 
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <img  className='product__rating' src={ratingStar} alt='rating star' />
                    ))}
                </div>
            </div>
            
            <img 
                src={image}
             />
           <button onClick={addToBasket}> Add to Basket </button>
        </div>
    )
}

export default Product
