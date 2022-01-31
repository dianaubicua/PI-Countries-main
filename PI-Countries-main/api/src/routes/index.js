const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getApiInfo, guardarPaises, countriesBd} = require('../routes/Countries');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', countriesBd);
/* router.get('/countries/:id', getApiInfo);
router.get('/tourism', getApiInfo)
 */




module.exports = router;
