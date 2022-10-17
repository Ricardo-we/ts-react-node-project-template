import { getAppModels, syncModelList } from "./src/utils/Db/db.utils";

import DbRepository from "./src/services/db/DbRepository";
import appConfig from "./src/config/index";
import { appUseRoutes } from "./src/utils/route.utils";
import express from "express";

const app = express();

// GLOBAL MIDDLEWARES
app.use(express.json());
const conn = DbRepository.getConnection("mssql");

async function main() {
    try {
        await appUseRoutes(app);
        const appModels = await getAppModels(appConfig.apps); 
        console.log(appModels);
        await syncModelList(appModels);

        await conn.sync();
        app.listen(appConfig.APP_PORT, () => {
            console.log(`Listening in http://localhost:${appConfig.APP_PORT}`)
        })
    } catch (err) {
        console.error(err)
    }
}

main().catch(console.error)