import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Paginado from '../Paginate/Paginado';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import {
    getVideogame,
    getGenres,
    getPlatforms,
    sortAlphabetic,
    sortAscDsc,
    filterCreated,
    filterGenre,
    filterPlat
} from '../../redux/action/index';
import { BackgroundHome,
    ButtonCreate,
    ButtonLoad,
    ContainerFilter,
    FilterOrder,
    Grid,
    LinkCard,
    SelectFilter,
    TitleHome
} from './StyledHome';

export default function Home() {
    const dispatch = useDispatch(); //Constante para dispachar mis acciones
    const allGames = useSelector((state) => state.videogame); //Traigo todo lo que este en el estado videogame y lo cargo a una constante
    const allGenres = useSelector((state) => state.genres); //Traigo todo lo que este en el estado genre y lo cargo a una constante
    const allPlatforms = useSelector((state) => state.platforms);

    console.log(allGames)
    const [header, setHeader] = useState('') //Estado local vacio

    const [currentPage, setCurrentPage] = useState(1);  //Declaro mis estados locales, un estado para la pagina actual y otro para setear mi pagina actual, la cual arranca en 1
    const [gameForPage, setGameForPage] = useState(15); //Declaro mis estados locales, un estado para los juegos por pagina y otro para seatear mi juegos por pagina, la cual quiero que haya 15 por pagina
    const indexOfLastPage = currentPage * gameForPage;  // 6
    const indexOfFirstPage = indexOfLastPage - gameForPage; //0
    const currentGames = allGames.slice(indexOfFirstPage, indexOfLastPage) //El slice corta mi arreglo del estado global, es decir en la pag 1 apaeceran 15 games y en la 2da pg del 16 al 31

    const paginado = (pageNumber) => {   //Creo una constante con la propieda numero de pagina y seteo la pagina actual con el numero de pagina
        setCurrentPage(pageNumber)
    }

    useEffect(() => {   //Llena el estado cuando se monta el componente
        dispatch(getVideogame())
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getVideogame());
    }

    function filterCreate(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
    }

    function filteredGenre(e) {
        e.target.value === 'All' ?
        dispatch(getVideogame()) &&
        setHeader('Explore all the Games') :
        dispatch(filterGenre(e.target.value))
        setCurrentPage(1);
    }

    function filterPlatforms(e) {
        e.target.value === 'All' ?
        dispatch(getVideogame()) &&
        setHeader('Explore all the Games') :
        dispatch(filterPlat(e.target.value))
        setCurrentPage(1);
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(sortAlphabetic(e.target.value));
        setCurrentPage(1);
        setHeader(`Ordenado ${e.target.value}`)  //Cuando se setee en la pagina1, se setea el estado local y renderiza el ordenamiento
    }

    function handleSort2(e) {
        e.preventDefault();
        dispatch(sortAscDsc(e.target.value));
        setCurrentPage(1);
        setHeader(`Ordenado ${e.target.value}`)
    }

    return (
        <BackgroundHome>
            <TitleHome>GAMES</TitleHome>

            <SearchBar />

            <ContainerFilter>
                <FilterOrder>
                    <ButtonLoad onClick={(e) => { handleClick(e) }}></ButtonLoad>
                    <SelectFilter onChange={e => handleSort2(e)}>
                        <option className='option-filter' hidden value='rating'>Rating</option>
                        <option className='option-filter' value='low rating'>Low Rating</option>
                        <option className='option-filter' value='high rating'>High Rating</option>
                    </SelectFilter>

                    <SelectFilter onChange={e => handleSort(e)}>
                        <option className='option-filter' hidden value='Alfabetico'>Alphabetic</option>
                        <option className='option-filter' value='A - Z'>A - Z</option>
                        <option className='option-filter' value='Z - A'>Z - A</option>
                    </SelectFilter>

                    <SelectFilter onChange={(e) => filteredGenre(e)}>
                        <option hidden value='Genres'>Genres</option>
                        <option value='All'>All</option>
                        {
                            allGenres?.map(genre => (   //Pregunto si esta mi estado global y si esta lo mapea
                                <option value={genre.name} key={genre.id}>{genre.name}</option>
                            ))
                        }
                    </SelectFilter>

                    <SelectFilter onChange={(e) => filterPlatforms(e)}>
                        <option hidden value='Platforms'>Platforms</option>
                        <option value='All'>All</option>
                        {
                            allPlatforms?.map(plat => (   //Pregunto si esta mi estado global y si esta lo mapea
                                <option value={plat.name} key={plat.id}>{plat.name}</option>
                            ))
                        }
                    </SelectFilter>

                    <SelectFilter onChange={(e) => filterCreate(e)}>
                        <option value='All'>All</option>
                        <option value='created'>Created</option>
                        <option value='existent'>Existent</option>
                    </SelectFilter>

                    <Link to='/videogame'>
                        <ButtonCreate>Create</ButtonCreate>
                    </Link>
                </FilterOrder>
            </ContainerFilter>


            <Grid>
                {currentGames?.map((v) => ( //Estado Global
                    <LinkCard to={`/videogame/${v.id}`}>
                        <Card name={v.name} image={v.image} genres={v.genres} rating={v.rating} platforms={v.platforms} key={v.id} id={v.id} />
                    </LinkCard>
                ))}
            </Grid>

            <Paginado     //Le paso al  paginado
                gameForPage={gameForPage}
                allGames={allGames.length}  //el estado allGames, y el length para tener un valor numerico
                paginado={paginado}
            />

        </BackgroundHome>
    )
}