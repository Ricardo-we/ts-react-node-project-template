"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SqlConnector_1 = __importDefault(require("./SqlConnector"));
const config_1 = __importDefault(require("../../config"));
class DbRepository {
    static getConnection(connectionType) {
        if (connectionType === "mssql") {
            return SqlConnector_1.default.getConnection({
                dialect: 'mssql',
                host: "localhost",
                ...config_1.default.DB_CONFIG
            });
        }
    }
}
exports.default = DbRepository;
//# sourceMappingURL=DbRepository.js.map