import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameGame } from "../../redux/action";
import { ButtonSearch, DivSearch, Search } from "./StyledSearchBar";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);  //Seteo mi estado con el valor buscado
    }

    function handleSubmit(e) {
        e.preventDefault();
        setName('')
        dispatch(getNameGame(name));  //Todo lo que tipeo en mi input quiero que se guarde en mi estado local name
    }

    return (
        <DivSearch>
            <Search className='input-home' type='text' value={name} placeholder="Search game..." onChange={(e) => handleChange(e)}/>
            <ButtonSearch className='botonSearch' value='Buscar...' onClick={(e) => handleSubmit(e)}>Search</ButtonSearch>
        </DivSearch>
    )
}