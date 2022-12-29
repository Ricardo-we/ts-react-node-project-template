import { AuthMiddleware } from "../services/middleware/jwt.middleware";
import {Express} from "express";
import { ModelCtor } from "sequelize-typescript";
import appConfig from "../config/index";
import path from "path";

export const BASE_APP_PATH = path.join( __dirname,"..");

export function mapRoutes(appNameList: string[], basePath=BASE_APP_PATH){
    return Promise.all(appNameList.map(
        async appName => {
            const appPath = path.join(basePath, "app", appName);
            const router = (await import(path.join(appPath, "router")));
            if(!router.default && Object.keys(router)?.length > 1){
                return Object.values(router);
            }
            return router?.default;
        }
    ))
}

export async function appUseRoutes(app: Express){
    const routes = await mapRoutes(appConfig.apps,);
    routes.forEach(route => {
        if(route instanceof Array && route.length > 0)route.forEach((singleRoute: any) => app.use(singleRoute))
        else app.use(route)
    });
    return
}

export function joinRoutes(...routes: string[]){
    return routes.join("/");
}

export const useRoutesBaseConfig = (routeBasePath: string, ) => ({
    globalRoute: routeBasePath, 
    globalMiddleware: AuthMiddleware, 
    routesCustomPaths: { destroy: ":id", put: ":id", getOne: ":id" } 
})