export default (appName: string) => `
import { Request, Response } from "express";
import BController, { ControllerConfig } from "../../utils/Base/BController";

export default class ${appName}Controller implements BController {

    constructor(
        public controllerConfig: ControllerConfig
    ){
            
    }

    async post(req: Request, res: Response){

    }
    async put(req: Request, res: Response){

    }
    async destroy(req: Request, res: Response){

    }

    async get(req: Request, res: Response){
         
    }

    async getOne(req: Request, res: Response){
        
    }
}`