import { BASE_APP_PATH } from "../route.utils";
import { SyncOptions } from "sequelize";
import path from "path";

export function getAppModels(appNameList: string[], basePath = BASE_APP_PATH) {
    return Promise.all(appNameList.map(
        async appName => {
            const appPath = path.join(basePath, "app", appName);
            const models = (await import(path.join(appPath, "model")));
            return Object.values(models);
        }
    ))
}

export function syncModelList(models: Array<any>, syncOptions?: SyncOptions) {
    return Promise.all(models.map( appModels => {
        return Promise.all(appModels?.map((model: any) => model?.sync(syncOptions)));
    }))
}