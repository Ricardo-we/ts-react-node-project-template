import {Express} from "express";
import appConfig from "../config/index";
import path from "path";

export function mapRoutes(appNameList: string[], basePath=path.join( __dirname,"..")){
    return Promise.all(appNameList.map(
        appName => import(path.join(basePath, "app", appName, "router"))
    ))
}

export async function appUseRoutes(app: Express){
    const routes = await mapRoutes(appConfig.apps,);
    routes.forEach(route => app.use(route));
}

export function joinRoutes(...routes: string[]){
    return routes.join("/");
}