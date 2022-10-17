// console.log("HELLO WORLD")

import express, { Request, Response } from "express";

import DbRepository from "./src/services/db/DbRepository";
import appConfig from "./src/config/index";

const app = express();

// GLOBAL MIDDLEWARES
app.use(express.json());

async function main() {
    try {
        const connection = DbRepository.getConnection("mssql");
        await connection.authenticate();
        app.listen(appConfig.APP_PORT, () => {
            console.log(`Listening in http://localhost:${appConfig.APP_PORT}`)
        })
    } catch (err) {
        console.error(err)
    }
}

main().catch(console.error)