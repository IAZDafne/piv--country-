require('dotenv').config();
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Country,Tusristica } = require('../db')
const API = 'https://restcountries.eu/rest/v2'
const allCountries = API + '/all'
var Sequelize = require("sequelize");

router.get('/', async (req,res,next)=>{
    const paises = await axios.get('https://restcountries.eu/rest/v2/all')
    paises.data.forEach(async (pais) => {
      try {
        await Country.findOrCreate({
          where:{
            id: pais.alpha3Code,
            name:pais.name,
            flag: pais.flag? pais.flag:'imagen no encontrada',
            region: pais.region? pais.region : 'region no encontrada',
            capital: pais.capital ? pais.capital : 'capital no encontrada',
            subregion: pais.subregion ? pais.subregion : 'Subregion no encontrada',
            area:pais.area ? pais.area : 0,
            population: pais.population ? pais.population : 0,
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    })
})

module.exports=router