import React from 'react'
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import Footer from '../Footer'

export default function Product({ products }){
    let {id} = useParams()
    const product = products.find(prod => prod.id === parseInt(id))

    if(!product) return <NotFound />

    return (
        <>
            <div className="product-page">
                <div className="product-details">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                        <h1>R${product.price}</h1>
                        <p>{product.name}</p>
                        <p><strong>Avaliação:</strong> {renderStars(product.rating)}</p>
                        <Link to={'/checkout'}><button>Ir para o Checkout</button></Link>
                    </div>
                </div>
                <p className='desc'><strong>Sobre o Produto:</strong> {product.description}</p>
            </div>
            <Footer />
        </>
    );
}

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i}>⭐</span>);
    }
    return stars;
}