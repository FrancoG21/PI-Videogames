import React from 'react';
import { AllPaginate, ButtonPaginate } from './StyledPaginado';

export default function Paginado({gameForPage, allGames, paginado}) {
    const pageNumber = [];

    //Creo un ciclo for                                            //Recorro un arreglo, donde se redondea la division de todos los juegos por los juegos por pagina
    for(let i = 1; i <= Math.ceil(allGames / gameForPage); i++) { //Math.ceil(redonde hacia arriba) redondea todos mis juegos sobre mi juegos por pagina
        pageNumber.push(i) //Pusheo en mi arreglo vacio el numero de mi division
    }

    return (
        <nav>
            <AllPaginate>
                {
                    pageNumber?.map((number, index) => (   //Si tengo este arreglo, mapeamelo y devolveme por ese arreglo cada numero que me devuelva el paginado
                        <div id={index} key={index}>
                            <ButtonPaginate onClick={() => paginado(number)}>{number}</ButtonPaginate>
                        </div>
                    ))
                }
            </AllPaginate>
        </nav>
    )
}