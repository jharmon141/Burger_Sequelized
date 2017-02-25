'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
    return burger;
};

