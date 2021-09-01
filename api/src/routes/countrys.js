require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { Country,Turistica } = require('../db')
var Sequelize = require("sequelize");
const axios = require('axios').default;

router.get('/' ,async (req,res,next)=>{

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
let {name} =req.query
if (name) {
    const country = await Country.findAll({
        where: {
            name: {
                [Sequelize.Op.iLike]: `%${name}%`,
                
            },
         
        },
        include:Turistica  
    });
    return res.status(200).send(country);
}else if(!name){

    let offSet =require.query 
    const paisesdb =await Country.findAll({
        
            include:Turistica,
            // limit:10,
            // offset:offSet
    })
    return res.json(paisesdb) 
}
})

// name ="%"+name+"%"
//  Country.findAll({
//     where:{
//         [Sequelize.Op.or]:[
//             {
//                 name:{
//                     [Sequelize.Op.iLike]:name,
//                 },
//             },
//         ],
//     },
//     })
//     .then((data)=>{
//         res.json(data)
//     })
//     .catch(next)


router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    let detalle = id.toUpperCase();
    const pais = await Country.findByPk(detalle, {include: Turistica});
    pais ? res.json(pais) : res.sendStatus(404);
 });
module.exports=router