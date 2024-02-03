import React from 'react';
import '../Hojas-de-estilo/Contador.css'

export function Contador({numClicks}){
    return (
        <div className='contador'>
            {numClicks}
        </div>
    );
}