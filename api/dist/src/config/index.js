"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = {
    APP_PORT: process.env.port || 8000,
    DB_CONFIG: {
        username: process.env.SQS_DB_USER,
        dbName: process.env.SQS_DB_NAME,
        password: process.env.SQS_DB_PASSWORD,
    },
    HIDE_LOGS: false,
    APP_ROOT: path_1.default.join(__dirname, ".."),
    apps: [
        "users"
    ]
};
//# sourceMappingURL=index.js.map