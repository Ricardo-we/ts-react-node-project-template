import { dashedToPascalCase, firstLetterUppercase } from "../string.utils";
import { mkdirSyncSafe, writeFileSyncSafe } from "../file.utils";

import appConfig from "../../config/index";
import { blueLog } from "../log.utils";
import chalk from "chalk";
import cliSpinner from "cli-spinners";
import createControllerTemplate from "./appTemplate/controller.template";
import createModelTemplate from "./appTemplate/model.template";
import createRouterTemplate from "./appTemplate/router.template";
import ora from "ora";
import path from "path";

function createApp(appName: string) {
    const appRootDir = path.join(appConfig.APP_ROOT, "app");
    const newAppDir = path.join(appRootDir, appName)
    const controllerTemplate = createControllerTemplate(dashedToPascalCase(appName));
    const modelTemplate = createModelTemplate(appName, dashedToPascalCase(appName));
    const routerTemplate = createRouterTemplate(appName)
    mkdirSyncSafe(newAppDir);
    writeFileSyncSafe(path.join(newAppDir, "model.ts"), modelTemplate)
    writeFileSyncSafe(path.join(newAppDir, "controller.ts"), controllerTemplate)
    writeFileSyncSafe(path.join(newAppDir, "router.ts"), routerTemplate);
    return true
}

function main() {
    if (process.argv.length < 3) return console.log("Parameteres required");
    const action = process.argv[2];
    
    if (action === "createapp") {
        const spinner = ora(cliSpinner.dots).start(chalk.blue("Creating project"));
        const appName = process.argv[3];
        createApp(appName);
        blueLog("Successfully created " + appName + "!");
        spinner.stop();
    }
}

main()