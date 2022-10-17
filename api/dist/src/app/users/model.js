"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const DbRepository_1 = __importDefault(require("../../services/db/DbRepository"));
const db_fields_1 = require("../../utils/Db/db.fields");
const conn = DbRepository_1.default.getConnection("mssql");
const User = conn.define("users", {
    id: (0, db_fields_1.IdField)()
});
exports.User = User;
//# sourceMappingURL=model.js.map