const initialState = {
    videogame: [],
    allTheGames: [],
    genres: [],
    platforms: [],
    detail: [],
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogame: action.payload,  //En mi estado videogame guardo todo lo que me manda la accion GET VIDEOGAMES
                allTheGames: action.payload,
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload,
            }
        case 'GET_PLATFORM':
            return {
                ...state,
                platforms: action.payload,
            }
        case 'GET_NAME_GAME':
            return {
                ...state,
                videogame: action.payload,
            }
        case 'GET_ID_GAME':
            return {
                ...state,
                detail: action.payload,
            }
        case 'SORT_ALPHABETIC':
            let orderSort = action.payload === 'A - Z' ?  //Si action.payload es ascendente,
            state.videogame.sort(function (a, b) {        //ordeno el estado videogame de forma ascendente
                if (a.name > b.name) {                    //Comparo a.name con b.name, si a es mayor a b devuelvo 1
                    return 1;
                }
                if (a.name < b.name) {                    //Comparo a.name con b.name, si a es menor a b devuelvo -1
                    return -1;
                }
                return 0;                                 //Si son iguales no devuelvo nada
            }) :
            state.videogame.sort(function (a, b) {       //Ordeno el estado videogame de forma descendente
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                videogame: orderSort,
            }
        case 'SORT_ASC_DSC':
            let orderRating = action.payload === 'low rating' ?
            state.videogame.sort(function (d1, d2) {
                if(d1.rating > d2.rating) {
                    return 1;
                }
                if(d1.rating < d2.rating) {
                    return -1;
                }
                return 0;
            }) :
            state.videogame.sort(function (d1, d2) {
                if(d1.rating > d2.rating) {
                    return -1;
                }
                if(d1.rating < d2.rating) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                videogame: orderRating
            }
        case 'FILTER_CREATED':
            const createdFiltered = action.payload === 'created' ? state.allTheGames.filter(d => d.createdAtDb) : state.allTheGames.filter(d => !d.createdAtDb)
            return {
                ...state,
                videogame: action.payload === 'All' ? state.allTheGames : createdFiltered,
            }
        case 'FILTER_GENRES':
            const allGames = state.allTheGames;
            const gamesApi = allGames.filter(d => d.genres.includes(action.payload))
            const gamesDb = allGames.filter((d) => {
                for(let i = 0; i < d.genres.length; i++){
                    if(d.genres[i].name === action.payload){
                        return d;
                    }
                }
            })
            const allAb = gamesApi.concat(gamesDb);
            return {
                ...state,
                videogame: allAb,
            }
        case 'FILTER_PLATFORM':
            const gameAll = state.allTheGames;
            const platApi = gameAll.filter(d => d.platforms.includes(action.payload))
            const platDb = gameAll.filter((d) => {
                for(let i = 0; i < d.platforms.length; i++){
                    if(d.platforms[i].name === action.payload){
                        return d;
                    }
                }
            })
            const allPlatform = platApi.concat(platDb);
            return {
                ...state,
                videogame: allPlatform,
            }
        case 'POST_VIDEOGAME':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default rootReducer;