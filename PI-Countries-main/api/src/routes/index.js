const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { countriesBd, countriesName, findById, guardarPaises, getApiInfo} = require('./countries.js');
const { createActivity, getActivities, getNameActivities } = require('./tourism.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', countriesBd);
router.get('/countries/name', countriesName);
router.get('/countries/:id', findById);

router.post('/activities', createActivity);
router.get('/createdactivities', getActivities);

router.get('/paisesguardados', guardarPaises);
router.get('/traerpaises', getApiInfo);
router.get('/activityname', getNameActivities);




module.exports = router;
