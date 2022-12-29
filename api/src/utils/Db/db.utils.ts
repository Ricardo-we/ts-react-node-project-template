import { BelongsToOptions, HasManyOptions, SyncOptions } from "sequelize";

import { BASE_APP_PATH } from "../route.utils";
import { IdField } from "./db.fields";
import { Sequelize } from "sequelize";
import path from "path";

interface OneToManyOptions extends HasManyOptions, BelongsToOptions{
    children?: BelongsToOptions;
    parent?: HasManyOptions;
}

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

export function oneToManyRelation(parentModel: any, childModel: any, options: OneToManyOptions ){
    parentModel.hasMany(childModel, {...options,...options.parent });
    childModel.belongsTo(childModel,{ ...options, ...options.children });
    return true;
}

export function manyToManyRelationShip(firstModel: any, secondModel: any, joinerTableName: string, conn: Sequelize, options?: any){
    const joinerTable = conn.define(joinerTableName,{id: IdField()});
    firstModel.belongsToMany(secondModel, {through: joinerTableName})
    secondModel.belongsToMany(firstModel, {through: joinerTableName})
 
    firstModel.belongsToMany(secondModel, { through: joinerTableName,...options } )
    secondModel.belongsToMany(firstModel, { through: joinerTableName,...options } )
    return joinerTable;
}