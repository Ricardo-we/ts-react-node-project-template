import { getAppModels, syncModelList } from "../../Db/db.utils";
import { safeErrLog, safeLogs } from "../../log.utils";

import appConfig from "../../../config";

async function syncAllModels() {
    const appModels = await getAppModels(appConfig.apps);
    await syncModelList(
        appModels,
        { alter: true, force: false }
    );
    return;
}

syncAllModels()
.then(() => safeLogs("Models sync successfully"))
.catch(err => safeErrLog(err))
.finally(() => {
    safeLogs("Sync process completed")
    process.exit(0);
})
