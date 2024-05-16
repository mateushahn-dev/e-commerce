import React from 'react';
import { Link } from 'react-router-dom';

export default function Products({ products, addProduct }) {
  function renderStars(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push('⭐');
    }
    return stars.join('')
  }

  return (
    <>
      <div className='products-container'>
        {
          products.map(product => (
            <div key={product.id} className='product-card'>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p>{renderStars(product.rating)}</p>
              <p>R${product.price}</p>
              <div className='buttons'>
                <Link to={`/produto/${product.id}`}>
                  <button className='buy'>Ver Mais</button>
                </Link>
                <button onClick={() => addProduct(product.id)}
                        className='cart'>Add ao Carrinho</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}