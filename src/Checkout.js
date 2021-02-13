import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/01/composer/uploads/Valentine-ILMsFamilyPack/ilmDesktop/filename_dltm4gq_1x._CB662464524_.jpg" alt="Ad" 
                />
                <div>
                    <h2 className='checkout__title'> Your Shopping Basket</h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout__right"> 
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
