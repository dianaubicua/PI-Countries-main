const axios = require('axios');
const e = require('express');
const { Tourism, Country } = require('../db');

const createActivity = async(req, res) => {
  const { name, difficulty, duration, season, country } = req.body;
  const newActivity = await Tourism.create({ name, difficulty, duration, season });

  let activityAndCountry = await Country.findAll({
    where: {name: country}
})

  newActivity?.addCountry(activityAndCountry);
  res.send("Activity created");
  
}

/* const getNameActivities = async(req, res) => {
  try {
    let activities = await Tourism.findAll({
      where: {
        name: req.params.name
      }
    })
    res.status(200).send(activities);
    }
  catch (error) {
    res.status(500).send(error);
  }
} */

const getActivities = async(req, res) => {
  try {
    let activities = await Tourism.findAll()
    res.status(200).send(activities);
    }
  catch (error) {
    res.status(500).send(error);
  }
}
  
  module.exports = {createActivity, getActivities};