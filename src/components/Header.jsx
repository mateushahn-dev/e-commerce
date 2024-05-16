import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

export default function Header({setCart, prodsInCart}) {
    const [show, setShow] = useState(false)

    function showMenu() {
        setShow(!show)
    }

    return (
        <header>
          <div className='inner-content'> 
            <h2 className='logo'>Oferta<span>Certa</span></h2>
            <nav className={show ? 'show' : ''}>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
              </ul>
            </nav>
            <div className='search-container'>
              <div className='search-area'>
                <input type='search' placeholder='Pesquise Aqui' />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <button className='cart' onClick={() => setCart(true)}>
                <FontAwesomeIcon icon={faShoppingCart} /> 
                <div className='prod-count'>{prodsInCart.length}</div>
              </button>
              <button onClick={showMenu}>
                <FontAwesomeIcon className='menu-icon' icon={faBars} />
              </button>
            </div>
          </div>
        </header>
    )
}