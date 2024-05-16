import React from 'react';
import Heading from './Heading';
import Products from './Products';
import Exclusive from './Exclusive'

export default function Main({products, addProduct}) {
    return (
        <main>
            <Heading />
            <h2>Melhores Avaliados</h2>
            <Products addProduct={addProduct} products={products} />
            <Exclusive />
        </main>
    );
}