"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class SqlConnector {
    static getConnection(connectionConfig) {
        const sequelize = new sequelize_1.Sequelize(connectionConfig.dbName, connectionConfig.username, connectionConfig.password, connectionConfig);
        return sequelize;
    }
    ;
}
exports.default = SqlConnector;
//# sourceMappingURL=SqlConnector.js.map