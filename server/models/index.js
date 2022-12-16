const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const { Item } = require("./itemModel");

module.exports = {
    db: sequelize,
    Item,
};
