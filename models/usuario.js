/**
 * Created by herman on 17-08-16.
 */

"use strict";

module.exports = function (sequelize, Datatypes) {
    var Usuario = sequelize.define("Usuario", {
        username: Datatypes.STRING,
        password: Datatypes.STRING,
        email: Datatypes.STRING
    },{
        classMethods: {
            associate: function (models) {
                Usuario.hasMany(models.Rol)
            }
        }
    });
    return Usuario
}