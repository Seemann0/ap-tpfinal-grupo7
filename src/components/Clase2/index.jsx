import React from 'react'

export default function Clase2() {
    return (
        <>
            <div className="Calculadora" id='Calculadora'>
                <div className='topVisor'>
                    <div>
                        <h3>Resultado</h3>
                        <label htmlFor="visor"></label>
                        <input type="" id='visor' />
                    </div>
                </div>
                <div className='containerbuttons'>
                    <div className='containerNumbers'>
                        <div className='groupNumberTop'>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">1</button>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">2</button>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">3</button>
                        </div>
                        <div className='groupNumberMiddle'>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">4</button>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">5</button>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">6</button>
                        </div>
                        <div className='groupNumberBottom'>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">7</button>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">8</button>
                            <label htmlFor="enviarForm"></label>
                            <button id="enviarForm">9</button>
                        </div>
                        <label htmlFor="enviarForm"></label>
                        <button id="enviarForm">0</button>
                    </div>
                    <div className='containerOperation'>
                        <label htmlFor="enviarForm"></label>
                        <button id="enviarForm">+</button>
                        <label htmlFor="enviarForm"></label>
                        <button id="enviarForm">-</button>
                        <label htmlFor="enviarForm"></label>
                        <button id="enviarForm">X</button>
                        <label htmlFor="enviarForm"></label>
                        <button id="enviarForm">%</button>
                    </div>
                </div>
            </div>
        </>
    )
}
