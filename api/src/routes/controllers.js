const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');
const { API_KEY } = process.env;

// /* ---------------------------------- OBETNER LA INFO DE LA API ---------------------------------- */
const getApiInfo = async () => {  
  let apiUrl1 = [],  //Genero varios arreglos vacios
    apiUrl2 = [],
    apiUrl3 = [],
    apiUrl4 = [],
    apiUrl5 = [];
  
  Promise.all([
    (apiUrl1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)),   //Devuelvo todas las promesas de las diferentes paginas a mis arreglos vacios
    (apiUrl2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)),
    (apiUrl3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)),
    (apiUrl4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)),
    (apiUrl5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)),
  ]);
  
  let apiInfoTotal = [    //Cargo todos mis resultados de la data de la API y las guardo en una sola constante
    ...apiUrl1.data.results,
    ...apiUrl2.data.results,
    ...apiUrl3.data.results,
    ...apiUrl4.data.results,
    ...apiUrl5.data.results,
  ];
  
  const apiInfo = apiInfoTotal.map((e) => {  //En la constante donde tengo toda mi data quiero que me devuelve un arreglo nuevo donde quiero que este lo que necesito
    return {
      id: e.id,
      name: e.name,
      released: e.released,
      rating: e.rating,
      genres: e.genres.map((e) => e.name),
      platforms: e.platforms.map((e) => e.platform.name),
      image: e.background_image,
    };
  });
  return apiInfo;
};

// /* ---------------------------------- OBETNER LA INFO DE LA DATABASE ---------------------------------- */
const getDbInfo = async () => {
  return await Videogame.findAll({   //utilizo un findAll para traerme desde mi DataBase todos los Videogame
    include: [                       //Y tambien quiero que me incluya el modelo de Genre con el atributo name que esta definico en mi modelo
      {
        model: Genre,
        attributes: ["name"],
        through: {                   //Comprobacion de traerme los atributos
          attributes: [],
        },
      },
      {
        model: Platform,           //Y tambien quiero que me incluya el modelo de Platform con el atributo name
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

// /* ---------------------------------- OBTENER TODA LA INFORMACION (API/DATABASE) ---------------------------------- */
const allVideogames = async () => {
  const apiInfo = await getApiInfo();   //Llamo a mi funcion para obtener la info de la API y la ejecuto porque sino no me devuelve nada
  const dbInfo = await getDbInfo();      //LLamo mi funcion para obtener la info de la DB y la ejecuto
  const allInfo = apiInfo.concat(dbInfo);  //Concateno ambas info para tener todo en una
  return allInfo;
}




// const validateUUID = (id) => {
// 	const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
// 	return regex.test(id);
// };

module.exports = {
  getApiInfo,
  getDbInfo,
  allVideogames,
  // getGenres,
};
