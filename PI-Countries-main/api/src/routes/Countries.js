const axios = require('axios');
const e = require('express');
const { Tourism, Country } = require('../db');
const { Op } = require("sequelize");

//Busco la informacion de la API
const getApiInfo = async(req, res) => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');

    const countries = await apiUrl.data.map(e => {
        return {
            id: e.cca3,
            name: e.name.common,
            flags: e.flags[0],
            continents: e.continents[0],
            capital: e.capital?e.capital[0]:'Este país no tiene capital',
            subregion: e.subregion? e.subregion: 'Este país no tiene subregion',
            area: e.area,
            population: e.population    
    }
    });
    return countries;
}; 

const guardarPaises = async(req, res) => {
    try { 
        const allCountries = await getApiInfo();
        allCountries.forEach((e)=>{
            Country.findOrCreate({
                where: {
                    id: e.id,
                    name: e.name,
                    flags: e.flags,
                    continents: e.continents,
                    capital: e.capital,
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population 
                }
            })
        })
         const totalCountries = await Country.findAll({
            include: [{
                 model: Tourism,
                attributes: ['name'],
                through: {
                   attributes: [],
                 }
             }]
         });
      res.json(totalCountries);
    }
    catch(err) {
        console.log(err);
    }
}

const countriesBd = async(req, res) => {
    try {
        const totalCountries = await Country.findAll({
            include: [{
                model: Tourism,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }]
        });
        res.json(totalCountries);
    }

    catch(err) {
        console.log(err);
    }
}

const countriesName = async(req, res) => {
    const name = req.query;
    //console.log(name);
    try {
        const totalCountries = await Country.findAll({
            include: [{
                model: Tourism,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }]
        });
    
        if (name) {
            const nombre = await totalCountries.filter(e=>{
                let data = JSON.parse( JSON.stringify(e));
                //console.log(data.name,name.queryName);
                if(data.name === name.queryName){
                    //console.log(data.name);
                    return data;
                }
            });
            nombre.length ?
             res.status(200).send(nombre) :
            res.status(404).send('No se encontró ningún país con ese nombre');
         } else {
             res.status(200).send(totalCountries);
         }
    }

    catch(err) {
        console.log(err);
    }
}

    const findById = async (req, res) => {
        const id = req.params.id;
        try{
            const country = await Country.findAll({
                include: [{
                    model: Tourism, //para traer la actividad que le puse al pais
                    attributes: ['name', 'difficulty', 'duration', 'season'],
                    through: {
                        attributes: [],
                    }
                }],
                where: {
                    id: id
                }
            });
           country.length ? res.send(country) : 
           res.status(400).send('No se encontró ningún país con ese id');
        }
        catch(err){
            console.log(err);
        }
}



    


module.exports = { countriesBd, countriesName, findById}