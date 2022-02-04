import React from 'react';
import './paginado.css';

export default function Paginado ({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++) { //Math.ceil redondea hacia arriba
        pageNumbers.push(i); //le sumamos 1 para que empiece en 1 el paginado
    }
    return (
        <nav className='numeros'>
            <ul className='paginado'>
                { pageNumbers &&
                pageNumbers.map(number =>
                    <li className='numbers' key={number}>
                        <button className='number' onClick={() => paginado(number)}>{number}</button>
                    </li>
           )}
            </ul>
        </nav>
    )
}
