import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer'

export default function ExclusiveProduct(){
    return (
        <>
            <div className="product-page">
                <div className="product-details">
                    <img src="../images/exclusive.png" alt='smart band 4' />
                    <div className="product-info">
                        <h1>R$299.99</h1>
                        <p>Smart Band 4</p>
                        <p><strong>Avaliação:</strong> {renderStars(5)}</p>
                        <Link to={'/checkout'}><button>Ir para o Checkout</button></Link>
                    </div>
                </div>
                <p className='desc'><strong>Sobre o Produto:</strong> A Smart Band 4 é uma pulseira inteligente repleta de recursos para acompanhar seu estilo de vida ativo. Com monitoramento de atividades, frequência cardíaca e sono, além de notificações em tempo real, é o seu parceiro perfeito para um dia repleto de movimento e bem-estar. Com um design moderno e leve, a Smart Band 4 se adapta confortavelmente ao seu pulso, proporcionando conforto durante todo o dia. Além disso, sua tela colorida oferece uma experiência visual vibrante, facilitando a visualização das informações importantes. Seja para monitorar seus exercícios, controlar sua saúde ou receber notificações do seu smartphone, a Smart Band 4 é a companheira ideal para um estilo de vida saudável e conectado.</p>
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

