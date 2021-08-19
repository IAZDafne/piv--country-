const { Router } = require('express');
const country =require('./country');
const paises =require('./countrys.js');
const turistica = require('./tusristica')
//const countrys =require('./countrys')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/actividad',turistica)
router.use('/obtener',country)
router.use('/countries',paises)



//router.use('/countrys', countrys)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
