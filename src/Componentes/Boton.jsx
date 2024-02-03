import React from 'react';
import '../Hojas-de-estilo/Boton.css';

export function Boton({texto, esBotonDeClick, manejarClick}){
    return (
        <button
            className={esBotonDeClick ? 'boton-click' : 'boton-reinicio'}
            onClick={manejarClick}>
            {texto}
        </button>
    );
}