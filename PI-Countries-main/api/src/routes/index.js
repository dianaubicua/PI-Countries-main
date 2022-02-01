const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getApiInfo, guardarPaises, countriesBd, countriesName} = require('./countries.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', countriesBd);
router.get('/countries/name', countriesName);





module.exports = router;
