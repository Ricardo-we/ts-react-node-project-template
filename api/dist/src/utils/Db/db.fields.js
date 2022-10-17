"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdField = void 0;
const sequelize_1 = require("sequelize");
function IdField() {
    return {
        type: sequelize_1.DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true
    };
}
exports.IdField = IdField;
//# sourceMappingURL=db.fields.js.map