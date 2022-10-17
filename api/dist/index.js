"use strict";
// console.log("HELLO WORLD")
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/config/index"));
const app = (0, express_1.default)();
// GLOBAL MIDDLEWARES
app.use(express_1.default.json());
async function main() {
    try {
        app.listen(index_1.default.APP_PORT, () => {
            console.log(`Listening in http://localhost:${index_1.default.APP_PORT}`);
        });
    }
    catch (err) {
        console.error(err);
    }
}
main().catch(console.error);
//# sourceMappingURL=index.js.map