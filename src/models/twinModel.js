const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Twin = sequelize.define(
    "Twin",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        twin_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        brand_description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: "twins",
        timestamps: false
    }
);

module.exports = Twin;