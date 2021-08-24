require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { Country,Turistica } = require('../db')


router.post('/', async(req,res)=>{
    const { name,difficulty, duration, season, country}=req.body;
    
    try {
        const nuevaAct = await Turistica.create({ name, difficulty,duration,season })

        if (!Array.isArray(country)) {
            const countrydb = await Country.findOne({
                where : { id : country }
            })
            
            await nuevaAct.addCountry(countrydb)
            return res.send(`${nuevaAct.nombre} ${countrydb.nombre}`)
        } else {
            country.forEach(async(paisId) => {
                const pais = await Country.findByPk(paisId)
                await nuevaAct.addCountry(pais)
            })
            return res.send(`${nuevaAct.nombre}${country}`)
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
module.exports=router