require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { Country,Turistica } = require('../db')
var Sequelize = require("sequelize");


router.post('/', async(req,res)=>{
    const { name,difficulty, duration, season,id, country}=req.body;
    console.log(name,difficulty, duration,id, season, country)
    try {
        const nuevaAct = await Turistica.create({ name, difficulty,duration,season })
        
        if (!Array.isArray(country)) {
            const countrydb = await Country.findOne({
                where : { name : country }
            })
            console.log('yp ías',countrydb)
            
            await nuevaAct.addCountry(countrydb)
            return res.send('se creo')
        } else {
            country.forEach(async(paises) => {
                const countrydb = await Country.findOne({
                    where: { name: paises}})
                    
                await nuevaAct.addCountry(countrydb)
            }) 
            console
            return res.send({msg:'secreo'})
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
// let paisdb =country.map(pais =>{
//     return Country.findAll({
//         where:{
          
//           id:pais
//         }
//     })
// })
// let allPais =await Promise.all(paisdb);
// let turistica =await Tusristica.create({
//     name,
//     difficulty,
//     duration,
//     season,
// })
// allPais.forEach(tu=>
//     turistica.setCountry(tu[0]))
//     res.json(turistica)
})
router.get('/', async (req, res)=>{
    const {name, all} = req.query;
    if(all){
       const actividad = await Turistica.findAll( {
        
        where:{
            name:actividad.name,
            duration:actividad.duration,
            season:actividad.season,
            difficulty:actividad.difficulty,
        },
        include: Country} );
        console.log(actividad)
       return actividad ? res.json(actividad) : res.sendStatus(400);
    }
    else {
       const turistica = await Turistica.findAll(
          {
             where: {
                name:{ [Sequelize.Op.iLike]: `%${name}%` } 
                    },
                    include: Country
                    
          },
          
       );
       return turistica ? res.json(turistica) : res.sendStatus(400);
    }
    
 })

//  router.get('/', async (req,res) => {
    
//        const actividades = await Turistica.findAll( {include: Country} );
//        console.log(actividades,'soy actback')
//        return actividades ? res.json(actividades) : res.sendStatus(400);
    
            

     
//  })
 
 

module.exports=router