const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');
const { allVideogames } = require('./controllers');
// const { Op } = require("sequelize");
const {API_KEY} = process.env;

/* ---------------------------------- GET VIDEOGAMES / GET NAME VIDEOGAMES ---------------------------------- */
router.get('/videogames', async (req, res) => {
  let { name } = req.query;
  let videogamesTotal = await allVideogames();
  if (name) {                                   //Si hay un nombre que me pasan por query
    let videogameName = videogamesTotal.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));  //Filtro mi constante en la que traigo todos mis videoGame y agarra el name y fijate si incluye el name que me pasaron por query; uso el ToLowerCase para que mi el elemento name me llegue en minuscula y lo mismo para el name que me llega por query
    videogameName.length                        //Si encuentra algo de mi filtrado que me devuelva los buscado por query si no un error
      ? res.status(200).send(videogameName)
      : res.status(404).send("Video game not found");
  } else {                                     //Si ni hay un nombre por query que me devuelva todos los videogames
    res.status(200).send(videogamesTotal);
  }
});



// router.get("/videogames", (req, res, next) => {
//   let name = req.query.search;
//   let videgamesApi;
//   let videogamesDb;

//   if (name) {
//     videgamesApi = axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
//     videogamesDb = Videogame.findAll({
//       where: {
//         name: {
//           [Op.iLike]: "%" + name + "%",
//         },
//       },
//       include: [{ model: Genre }, { model: Platform }],
//     });
//   } else {
//     videgamesApi = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
//     videogamesDb = Videogame.findAll({
//       include: [{ model: Genre }, { model: Platform }],
//     });
//   }
//   Promise.all([videgamesApi, videogamesDb])
//     .then((response) => {
//       const [videogameApi, videogamesDb] = response;

//       let filteredVideogames = videogameApi.data.results.map((game) => {
//         return {
//           id: game.id,
//           name: game.name,
//           description: game.description,
//           release: game.released,
//           rating: game.rating,
//           platforms: game.platforms?.map(p => p.platform.name),
//           genres: game.genres?.map(genre => genre.name),
//           image: game.background_image,
//         };
//       });
//       let allVideogames = [...filteredVideogames, ...videogamesDb];
//       res.status(200).send(allVideogames);
//       console.log(allVideogames);
//     })
//     .catch((error) => {
//       next(error);
//     });
// });


/* ---------------------------------- GET VIDEOGAMES ID ---------------------------------- */
router.get('/videogame/:id', async (req, res)=> {
  const {id} = req.params
  if(!id.includes('-')) {       //Si mi ID no incluye - , busco la ID de los videogames por la API
      const detail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      const dat = await detail.data  //Obtengo los resultados que necesito para devolver en mis detalles
      let formated = [{
          id: dat.id,
          name: dat.name,
          description: dat.description,
          image: dat.background_image,
          released: dat.released,
          rating: dat.rating, 
          genres: dat.genres.map( d => d.name),
          platforms: dat.platforms.map( d => d.platform.name)
      }]
      formated.length ?            //Si encuentra los resultados que pedi que me los devuelva y en caso de que no, una alerta
      res.status(200).json(formated) :
      res.status(404).send('Did not find game by Id')
  } else {            //Si mi ID incluye -
      let gameFound = await Videogame.findByPk(id, {  //Utilizo un findByPk para traer desde la DB todas las ID de los videogames
          include: [{
              model: Genre,               //Y tambien quiero que me incluya el modelo de Genre y Platform con el atributo name que esta definico en mi modelo
              attributes: ['name'],
              through : {
                  attributes: [],
              },
          }, {
            model: Platform,
            attributes: ['name'],
            through : {
                attributes: [],
            }
        }]
      })
      var arreglo = []
      arreglo.push(gameFound)

      res.status(200).json(arreglo)
  }
})

/* ---------------------------------- POST VIDEOGAMES ---------------------------------- */
router.post('/', async (req, res) => {
  let {                  //Constante donde me traigo todo lo que quiero por Body
    name,
    description,
    released,
    rating,
    genres,
    platforms,
    image,
    createdAtDb,
  } = req.body;

  try {
    let createdVideogame = await Videogame.create({  //Constante donde creo mi videogame
      name,
      description,
      released,
      rating,
      image,
      createdAtDb,
    })
      
    let genreDb = await Genre.findAll({     //Busco los Generos que estan en el modelo de Genre, es decir busco desde el modelo todos los Generos que coincidan con los generos que le pase por Body
      where: {name : genres}
    })
    await createdVideogame.addGenre(genreDb); //A la constante que crea el Videogame le agrego el Genero que coincida con el Genero buscado
      
    let platformDb = await Platform.findAll({
      where: {name: platforms}
    })
    await createdVideogame.addPlatform(platformDb);

    return res.send('El Videojuego fue creado');

  } catch(error) {
    res.status(400).send({message: 'Error'})
    console.log(error)
  }
})


/* ---------------------------------- GET GENRES ---------------------------------- */
router.get('/genres', async (req, res, next) => {
  try {
    const genresDb = await Genre.findAll();
    if (!genresDb.length) {                    //Si no esta mis Generos en la DataBase, lo busco por la API
      const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
      const genresMap = genresApi.data.results?.map((genre) => {  //Mapeo los generos que me llegan como results, para obtener un nuevo arreglo con los names de los generos que quiero
         return {
          name: genre.name
        };
      });
      //BulCreate permite insertar multiples registros en la tabla de datos con una sola llamada de funcion
      const addGenres = await Genre.bulkCreate(genresMap); //Paso el mapeo que hice a mi modelo Genre y lo devuelvo
      return res.status(200).send(addGenres);
    }else{          //Si mi Generos estan la DataBase los devuelvo
      return res.status(200).send(genresDb)
    }
  } catch (error) {
    next(error);
  }
})

/* ---------------------------------- GET PLATFORMS ---------------------------------- */
router.get('/platforms', async(req, res, next)  => {
  try{
    const platformsDb = await Platform.findAll();
    if(!platformsDb.length){
      const platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
      const platformsMap = platformsApi.data.results?.map((platforms) => {
        return{
          id: platforms.id,
          name: platforms.name,
        }
      })
      const addPlatforms = await Platform.bulkCreate(platformsMap);
      return res.status(200).json(addPlatforms)
    }
    else{
      return res.status(200).json(platformsDb)
    }
  } catch(error){
    next(new Error(`Error ${error.message}`))
  }
})


module.exports = router;
