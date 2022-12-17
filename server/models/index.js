const { sequelize } = require("../db");
const { Item } = require("./itemModel");

module.exports = {
    sequelize,
    Item,
};
