import { sequelize, DataTypes } from "../db";

const Item = sequelize.define("item", {
    name: {
        type: DataTypes.String,
        allowNull: false,
    },
    description: {
        type: DataTypes.String,
        allowNull: false,
    },
    price: {
        type: DataTypes.Number,
        allowNull: false,
    },
    category: {
        type: DataTypes.String,
        allowNull: false,
    },
    image: {
        type: DataTypes.String,
        allowNull: false,
    },
});

module.exports = Item;
