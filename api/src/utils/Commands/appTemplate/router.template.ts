import {dashedToPascalCase} from "../../string.utils";

export default (appName: string) => `
import BRouter from "../../utils/Base/BRouter";
import ${dashedToPascalCase(appName)} from "./controller";

const routeBasePath = "/${appName}" 
const controller = new ${dashedToPascalCase(appName)}({ globalRoute:"" });
const router = BRouter.crudRouter(routeBasePath, controller);

export default router;
`