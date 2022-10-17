import { Request, Response } from "express";

import Middleware from "../../types/Middleware";

export type MiddlewareList = Array<typeof Middleware>;
export interface ControllerConfig {
    globalRoute?: string;
    globalMiddleware?: typeof Middleware;
    
    routesCustomPaths?: {
        get?: string;
        getOne?: string;
        post?: string;
        put?: string;
        destroy?: string;
    },
    routesMiddlewares?: {
        get?: MiddlewareList;
        getOne?: MiddlewareList;
        post?: MiddlewareList;
        put?: MiddlewareList;
        destroy?: MiddlewareList;
    }
}

export default interface BController {
    controllerConfig: ControllerConfig; 
    get:(req: Request, res: Response) => any;
    getOne:(req: Request, res: Response) => any
    post:(req: Request, res: Response) => any
    put:(req: Request, res: Response) => any
    destroy:(req: Request, res: Response) => any
}