import React from 'react';

function Encuestas({ encuestas }) {
    return (
    <div className='div-Encuestas'>
        <h2>Encuestas Disponibles</h2>
        <ul className='ul1-Encuestas'>
        {encuestas.map(encuesta => (
          <li key={encuesta.id} className='li-Encuestas'>
            <p>{encuesta.pregunta}</p>
            <ul className='ul2-Encuestas'>
              {encuesta.opciones.map((opcion, index) => (
                <li key={index}>{opcion}</li>
              ))}
            </ul>
          </li>
        ))}
        </ul>
    </div>
    );
}

export default Encuestas;
