import axios from 'axios';

//Redux-Thunk sirve para trabajar de manera asincrona las llamadas de mi actions

export function getVideogame() {
    return async function(dispatch) {
        var json = await axios.get(`/videogames`)
        
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data,
        })
    }
}

export function getGenres() {
    return async function(dispatch) {
        var json = await axios.get(`/genres`)

        return dispatch({
            type: 'GET_GENRES',
            payload: json.data,
        })
    }
}

export function getPlatforms() {
    return async function(dispatch) {
        var json = await axios.get(`/platforms`)

        return dispatch({
            type: 'GET_PLATFORM',
            payload: json.data,
        })
    }
}

export function getNameGame(name) {
    return async function(dispatch) {
        var json = await axios.get(`/videogames?name=${name}`)

        return dispatch({
            type: 'GET_NAME_GAME',
            payload: json.data,
        })
    }
}

export function getIdGame(id) {
    return async function(dispatch) {
        var json = await axios.get(`/videogame/${id}`)

        return dispatch({
            type: 'GET_ID_GAME',
            payload: json.data,
        })
    }
}

export function sortAlphabetic(payload) {   //payload= el value que me va a llegar
    console.log(payload)
    return {
        type: 'SORT_ALPHABETIC',
        payload,
    }
}

export function sortAscDsc(payload){
    console.log(payload)
    return {
        type: 'SORT_ASC_DSC',
        payload,
    }
}

export function filterCreated(payload){
    console.log(payload)
    return {
        type: 'FILTER_CREATED',
        payload,
    }
}

export function filterGenre(payload){
    console.log(payload)
    return {
        type: 'FILTER_GENRES',
        payload,
    }
}

export function filterPlat(payload){
    console.log(payload)
    return {
        type: 'FILTER_PLATFORM',
        payload,
    }
}

export function postVideogame(payload) {
    return async function(dispatch) {
        const json = await axios.post('/', payload);
        console.log(json);
        return json;
    }
}
