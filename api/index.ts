import appConfig from "./src/config/index";
import { appUseRoutes } from "./src/utils/route.utils";
import express from "express";

const app = express();

// GLOBAL MIDDLEWARES
app.use(express.json());

async function main() {
    try {
        await appUseRoutes(app);
        
        app.listen(appConfig.APP_PORT, () => {
            console.log(`Listening in http://localhost:${appConfig.APP_PORT}`)
        })
    } catch (err) {
        console.error(err)
    }
}

main().catch(console.error)