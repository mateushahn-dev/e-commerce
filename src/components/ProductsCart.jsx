import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function ProductsCart({name, id, price, image, rate, removeProduct, addTotalPrice}) {
    const [quantity, setQuantity] = useState(1)
    const [allPrice, setAllPrice] = useState(price)

    return (
        <div className='cart-product'>
            <div className='left'>
                <button className='remove-product-btn'>
                    <FontAwesomeIcon onClick={() => {
                        removeProduct(id)
                        addTotalPrice(-allPrice)
                    }} icon={faXmark} />
                </button>
            </div>
            <div className='details'>
                <h5>{name}</h5>
                <small>R${price}</small>
                <div><small>Unidades: </small><input type='number' min={1} value={quantity} onChange={(e) => {
                    setQuantity(e.target.value)
                    addTotalPrice(e.target.value * price - allPrice)
                    setAllPrice(e.target.value * price)
                }}/></div>
                {allPrice > price && (
                    <p className='sun-total'>
                        <b>Soma: R${allPrice}</b> 
                    </p>
                )}
            </div>
            <div className='right'>
                <img src={image} alt={name} />
            </div>
        </div>
    )
}