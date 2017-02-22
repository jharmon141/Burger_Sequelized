module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN
        }
    }
    );
    return burger;
};
