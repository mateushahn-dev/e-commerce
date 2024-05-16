import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading() {
    return (
        <section className='apresentation'>
            <div className='content'>
                <h1>Só as Melhores<br /> Ofertas</h1>
                <p>Aqui você encontra produtos para melhorar a qualidade do seu trabalho ou laser.</p>
                <Link to='/produtos'><button>Veja ></button></Link>
            </div>
            <div className='image'>
                <img src='/images/header-image.png'/>
            </div>
        </section>
    )
}