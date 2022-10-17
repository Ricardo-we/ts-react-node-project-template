import {Express} from "express";
import { ModelCtor } from "sequelize-typescript";
import appConfig from "../config/index";
import path from "path";

export const BASE_APP_PATH = path.join( __dirname,"..");

export function mapRoutes(appNameList: string[], basePath=BASE_APP_PATH){
    return Promise.all(appNameList.map(
        async appName => {
            const appPath = path.join(basePath, "app", appName);
            const router = (await import(path.join(appPath, "router")))?.default;
            return router;
        }
    ))
}

export async function appUseRoutes(app: Express){
    const routes = await mapRoutes(appConfig.apps,);
    routes.forEach(route => app.use(route));
    return
}

export function joinRoutes(...routes: string[]){
    return routes.join("/");
}