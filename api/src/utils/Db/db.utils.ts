import { ModelCtor } from "sequelize-typescript";

export function syncModelList(models: Array<ModelCtor>){
    return Promise.all(models.map(model => model.sync()))
}