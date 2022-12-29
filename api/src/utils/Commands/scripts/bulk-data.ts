import { blueLog, errLog } from "../../log.utils";

import appConfig from "../../../config/index";
import path from "path";

const BASE_APP_PATH = path.join(__dirname, "..", "..","..","app");

async function bulkAll() {
    try {
        await Promise.all(
            appConfig.BULK_LIST.map(async (dataBulkAppName) => {
                const appBulkModule = await import(path.join(BASE_APP_PATH, dataBulkAppName, "dataBulk"));
                await appBulkModule.bulkData();
            })
        )
        blueLog("Action succeeded")
        process.exit(0)
    } catch (error) {
        errLog("Something went wrong...")
        errLog(error);
        process.exit(1)
    }
}

bulkAll();