const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourism', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM('Spring', 'Summer', 'Autumn', 'Winter'), //ASÍ SÓLO PERMITO ESTOS VALORES
      allowNull: false,
    },
    createdInDb: { //ESTO NO ES UN CAMPO DE LA BASE DE DATOS
        type: DataTypes.BOOLEAN, //propiedad para diferenciar entre los que se crean en la base de datos y los que se crean en la app
        allowNull: false,
        defaultValue: false,
    },
  });
};

//automaticamente se asigna un id cuando no generamos uno