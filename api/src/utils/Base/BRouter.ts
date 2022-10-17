import BController from "./BController";
import { Router } from "express";
import { joinRoutes } from "../route.utils";

export default class BRouter {

    static crudRouter(basePath: string, controller: BController) {
        const router = Router();
        const controllerConfig = controller.controllerConfig.routesCustomPaths;
        const middlewares = controller.controllerConfig.routesMiddlewares;

        router.get(
            joinRoutes(basePath, controllerConfig?.get), 
            middlewares.get, 
            controller.get
        );
        router.get(
            joinRoutes(basePath, controllerConfig?.getOne), 
            middlewares.getOne, 
            controller.getOne
        );
        router.post(
            joinRoutes(basePath, controllerConfig?.post), 
            middlewares.post, 
            controller.post
        );
        router.put(
            joinRoutes(basePath, controllerConfig?.put), 
            middlewares.put, 
            controller.put
        );
        router.delete(
            joinRoutes(basePath, controllerConfig?.destroy), 
            middlewares.destroy, 
            controller.destroy
        );

        return router;
    }
}