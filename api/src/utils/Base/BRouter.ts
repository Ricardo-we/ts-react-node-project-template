import { NextFunction, Router } from "express";

import BController from "./BController";
import { joinRoutes } from "../route.utils";

const defaultMiddleware = (_: any, __: any, next: NextFunction) => next();

export default class BRouter {

    static crudRouter(basePath: string, controller: BController) {
        const router = Router();
        const controllerConfig = controller.controllerConfig.routesCustomPaths;
        const middlewares = controller.controllerConfig.routesMiddlewares;

        router.get(
            controllerConfig?.get ? joinRoutes(basePath, controllerConfig?.get) : basePath,
            controller?.controllerConfig?.globalMiddleware || defaultMiddleware,
            middlewares?.get || defaultMiddleware,
            controller.get
        );
        router.get(
            controllerConfig?.getOne ? joinRoutes(basePath, controllerConfig?.getOne) : basePath,
            controller?.controllerConfig?.globalMiddleware || defaultMiddleware,
            middlewares?.getOne || defaultMiddleware,
            controller.getOne
        );
        router.post(
            controllerConfig?.post ? joinRoutes(basePath, controllerConfig?.post) : basePath,
            controller?.controllerConfig?.globalMiddleware || defaultMiddleware,
            middlewares?.post || defaultMiddleware,
            controller.post
        );
        router.put(
            controllerConfig?.put ? joinRoutes(basePath, controllerConfig?.put) : basePath,
            controller?.controllerConfig?.globalMiddleware || defaultMiddleware,
            middlewares?.put || defaultMiddleware,
            controller.put
        );
        router.delete(
            controllerConfig?.destroy ? joinRoutes(basePath, controllerConfig?.destroy) : basePath,
            controller?.controllerConfig?.globalMiddleware || defaultMiddleware,
            middlewares?.destroy || defaultMiddleware,
            controller.destroy
        );

        return router;
    }
}