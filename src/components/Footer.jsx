import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='cta'>
                <div className='main-footer'>
                    <h2>Oferta<span>Certa</span></h2>
                    <p>Seu destino para compras online.</p>
                </div>
                <div className='download'>
                    <p>Baixe Já o Nosso Aplicativo.</p>
                    <p>Um App tão bom e simples quanto o site!</p>
                    <div className='buttons'>
                        <img src='/images/play-store.png' alt='play store' />
                        <img src='/images/app-store.png' alt='apple store' />
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>2023 © Todos os Direitos Reservados</p>
            </div>
        </footer>
    )
}