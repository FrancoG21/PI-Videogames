import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postVideogame, getGenres, getPlatforms } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import {
    TitleForm,
    Formulario,
    Legend,
    ContainerForm,
    Campo,
    Label,
    Input,
    Select,
    SubmitButton,
    ButtonBack,
    BackgroundForm,
    DivSelect,
    DivSubmit,
    Errors,
    ButtonQuit,
    ItemSelect,
    DivSelectForm
} from '../Form/StyledForm';

const isValidUrl = (url) => {
    try {
        new URL(url);
    } catch (e) {
        console.error(e);
        return false;
    }
    return true;
};

function validateInput(input) {
    var errors = {};
    if (!input.name) {
        errors.name = 'Name is required';
    } else if (input.name.length > 100) {
        errors.name = "The name is too long (Max = 100 letters)"
    }
    if (!input.description) {
        errors.description = 'Description is required';
    } else if (input.description.length > 1500) {
        errors.description = 'The description is very long. (Max = 1500 letters)';
    }
    if (!input.released) {
        errors.released = "Date is required"
    } else if (input.released.length > 10) {
        errors.released = "The Date is too long"
    }
    if (!input.rating) {
        errors.rating = 'Rating is required'
    } else if (input.rating > 5 || input.rating < 0) {
        errors.rating = "The rating must be between 0 and 5"
    }
    if (!input.image) {
        errors.image = "Image URL is required"
    } else if (!isValidUrl(input.image)) {
        errors.image = "The URL is not valid"
    } if (!input.genres[0]) {
        errors.genres = "Minimum one Gender is required"
    } if (!input.platforms[0]) {
        errors.platforms = 'Minimum one Platform is required'
    }
    return errors;
}

export default function CreateVideogame() {
    const dispatch = useDispatch();
    const history = useHistory();
    const allGenres = useSelector((state) => state.genres);
    const allPlatforms = useSelector((state) => state.platforms);
    const [errors, setErrors] = useState({})


    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getPlatforms());
    }, [dispatch])



    function handleChange(e) {               //Cuando ejecuto esta funcion, quiero que mi estado setInput además de lo que contiene, agegale el target.value de lo que este modificando
        setInput({
            ...input, [e.target.name]: e.target.value,
        })
        setErrors(validateInput({
            ...input,
            [e.target.name]: e.target.value,
        }))
        console.log(input)
    }

    function handleSelectGenres(e) {       //Cuando ejecuto esta funcion, quiero que mi estado setInput traigo lo que ya tenia y concateno mi target.value, que es lo que selecciono y se va guardando todo en un arreglo
        if (input.genres.length < 2) {
            setInput({
              ...input,
              genres: [...input.genres, e.target.value],
            });
            e.target.value = "Select genres";
        } else {
            alert("You cannot choose more than two platforms of videogame");
        }
    }

    // setInput({
    //     ...input,
    //     genres: [...input.genres, e.target.value]
    // })
    // setErrors(validateInput({
    //     ...input,
    //     [e.target.name]: e.target.value
    // }))


    function handleSelectPlatforms(e) {
        if (input.platforms.length < 2) {
            setInput({
              ...input,
              platforms: [...input.platforms, e.target.value],
            });
            e.target.value = "Select platform";
        } else {
            alert("You cannot choose more than two platforms of videogame");
        }
    }

    
    // setInput({
    //     ...input,
    //     platforms: [...input.platforms, e.target.value]
    // })
    // setErrors(validateInput({
    //     ...input,
    //     [e.target.name]: e.target.value
    // }))


    function handleSubmit(e) {   //Cuando ejecuto esta funcion que me dispache mi postVideogame y al ser creado que me mande una alert de creacion exxitosa y setee mi input en 0 y me devuelva a mi home
        e.preventDefault();
        console.log(input)
        dispatch(postVideogame(input))
        alert('Successfully Created VideoGame')
        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            image: '',
            genres: [],
            platforms: [],
        })
        history.push('/home');
    }

    function handleDeleteGenres(e) {   //Cuando ejecuto esta funcion quiero mi estado setInput traiga lo que ya tenia y compare mi elemento con mi value
        setInput({
            ...input,
            genres: input.genres.filter(genre => genre !== e)  //En mi estado input, donde me traigo todas las ocupaciones, la filtro por todos lo que no sea ese elemento y va a devolverme este estado denuevo con todos las ocupaciones que no hice click
        })
    }

    function handleDeletePlatforms(e) {
        setInput({
            ...input,
            platform: input.platforms.filter(plat => plat !== e)
        })
    }


    return (
        <BackgroundForm>
            <Link to='/home'>
                <ButtonBack></ButtonBack>
            </Link>

            <TitleForm>Create your Game</TitleForm>

            <Formulario onSubmit={(e) => handleSubmit(e)}>
                <Legend>Fill out the form to create your Video Game</Legend>

                <ContainerForm>
                    <Campo>
                        <Label>Name:</Label>
                        <Input className={errors.name && 'Peligro'} type='text' value={input.name} name='name' onChange={handleChange} />
                        {errors.name && (<Errors>{errors.name}</Errors>)}
                    </Campo>

                    <Campo>
                        <Label>Description:</Label>
                        <Input className={errors.description && 'Peligro'} type='text' value={input.description} name='description' onChange={handleChange} />
                        {errors.description && (<Errors>{errors.description}</Errors>)}
                    </Campo>

                    <Campo>
                        <Label>Released:</Label>
                        <Input className={errors.released && 'Peligro'} type='text' value={input.released} name='released' onChange={handleChange} />
                        {errors.released && (<Errors>{errors.released}</Errors>)}
                    </Campo>

                    <Campo>
                        <Label>Image:</Label>
                        <Input className={errors.image && 'Peligro'} type='text' value={input.image} name='image' onChange={handleChange} />
                        {errors.image && (<Errors>{errors.image}</Errors>)}
                    </Campo>

                    <Campo>
                        <Label>Rating:</Label>
                        <Input className={errors.rating && 'Peligro'} type='text' value={input.rating} name='rating' onChange={handleChange} />
                        {errors.rating && (<Errors>{errors.rating}</Errors>)}
                    </Campo>
                </ContainerForm>

                <DivSelect>
                    <div>
                        <Select className={errors.genres && 'Peligro'} id="select-created" onChange={(e) => handleSelectGenres(e)}>
                            <option hidden value='All'>Genres</option>
                            {allGenres.map((genre) => (
                                <option key={genre.id} value={genre.name}>{genre.name}</option>
                            ))}
                        </Select>
                        <div>{errors.genres && (<Errors>{errors.genres}</Errors>)}</div>
                        {input.genres.map(d =>     //Llamo mi estado input.genres y lo mapeo, esto hace que cada vez que selecciono un genero me aparezca un listado
                            <DivSelectForm>
                                <ButtonQuit onClick={() => handleDeleteGenres(d)}>X</ButtonQuit>
                                <ItemSelect>{d}</ItemSelect>
                            </DivSelectForm>
                        )}
                    </div>
                    <div>
                        <Select className={errors.platforms && 'Peligro'} id="select-created2" onChange={(e) => handleSelectPlatforms(e)}>
                            <option hidden value='All'>Platforms</option>
                            {allPlatforms.map((plat) => (
                                <option key={plat.id} value={plat.name}>{plat.name}</option>
                            ))}
                        </Select>
                        {errors.platforms && (<Errors>{errors.platforms}</Errors>)}
                        {input.platforms.map(d =>
                            <DivSelectForm>
                                <ButtonQuit onClick={() => handleDeletePlatforms(d)}>X</ButtonQuit>
                                <ItemSelect>{d}</ItemSelect>
                            </DivSelectForm>
                        )}
                    </div>
                </DivSelect>
                <DivSubmit>
                    <SubmitButton className="button-enviar"> Submit </SubmitButton>
                </DivSubmit>
            </Formulario>
        </BackgroundForm>
    )
}