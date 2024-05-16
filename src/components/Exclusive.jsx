import React from 'react'
import { Link } from 'react-router-dom'

export default function Exclusive() {
    return (
        <section className='exclusive'>
            <div className='image'>
                <img src='images/exclusive.png' />
            </div>
            <div className='content'>
                <h3>Smart Band 4</h3>
                <p>O companheiro perfeito para impulsionar seu estilo de vida ativo! Com seu design elegante e recursos avançados, o Smart Band 4 oferece o equilíbrio ideal entre forma e função. Monitore sua atividade física, acompanhe seu sono e fique conectado em movimento. Eleve sua jornada de saúde e bem-estar com o Smart Band 4 ao seu lado.</p>
                <Link to={'/checkout'}><button>Comprar</button></Link>
            </div>
        </section>
    )
}