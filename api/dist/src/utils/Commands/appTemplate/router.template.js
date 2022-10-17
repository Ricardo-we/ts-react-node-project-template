"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_utils_1 = require("../../string.utils");
exports.default = (appName) => `
import BRouter from "../../utils/Base/BRouter";
import ${(0, string_utils_1.dashedToPascalCase)(appName)} from "./controller";

const routeBasePath = "/${appName}" 
const controller = new ${(0, string_utils_1.dashedToPascalCase)(appName)}({ globalRoute:"" });
const router = BRouter.crudRouter(routeBasePath, controller);

export default router;
`;
//# sourceMappingURL=router.template.js.map