const axios = require('axios');
const e = require('express');
const { Tourism, Country } = require('../db');

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
    //     const totalCountries = await Country.findAll({
    //         include: [{
    //             model: Tourism,
    //             attributes: ['name'],
    //             through: {
    //                 attributes: [],
    //             }
    //         }]
    //     });
    //    res.json(totalCountries);
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


/* const countryId = async(req, res) => {
    const countryId =req.params.id;
    let countryById = await Country.fundByPk(countryId, {
        include: {
            model: Tourism,
        }
    })
} */





module.exports = {getApiInfo, guardarPaises, countriesBd };