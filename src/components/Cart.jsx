import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import ProductsCart from './ProductsCart'
import {Link} from 'react-router-dom'

export default function Cart({cart, setCart, prodsInCart, addTotalPrice, totalPrice, removeProduct}) {

    return (
        <aside className={`${cart && 'show'}`}>
            <div className='top'>
                <h4>Carrinho de Compras</h4>
                <button onClick={() => setCart(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <div className='products-list'>
                {prodsInCart.map((product) => <ProductsCart key={product.id} {...product} addTotalPrice={addTotalPrice} removeProduct={removeProduct} />)}
            </div>
            {prodsInCart.length === 0 ? <small style={{fontWeight: 'bold'}}><em>Nenhum produto por aqui...</em></small> : 
            <>
                <div className='total-value'>
                    <small>Total à pagar: {totalPrice}</small>
                </div>
                <Link to='/checkout' className='btn-finally'>
                    <span>Finalizar Compra ></span>
                </Link>
            </>}
        </aside>
    )
}