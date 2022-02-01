const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { countriesBd, countriesName, findById} = require('./countries.js');
const { createActivity, getActivities } = require('./tourism.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', countriesBd);
router.get('/countries/name', countriesName);
router.get('/countries/:id', findById);
router.post('/activities', createActivity);
router.get('/createdactivities' , getActivities);




module.exports = router;
