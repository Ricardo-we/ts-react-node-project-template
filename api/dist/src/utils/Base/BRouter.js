"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_utils_1 = require("../route.utils");
class BRouter {
    static crudRouter(basePath, controller) {
        const router = (0, express_1.Router)();
        const controllerConfig = controller.controllerConfig.routesCustomPaths;
        const middlewares = controller.controllerConfig.routesMiddlewares;
        router.get((0, route_utils_1.joinRoutes)(basePath, controllerConfig?.get), middlewares.get, controller.get);
        router.get((0, route_utils_1.joinRoutes)(basePath, controllerConfig?.getOne), middlewares.getOne, controller.getOne);
        router.post((0, route_utils_1.joinRoutes)(basePath, controllerConfig?.post), middlewares.post, controller.post);
        router.put((0, route_utils_1.joinRoutes)(basePath, controllerConfig?.put), middlewares.put, controller.put);
        router.delete((0, route_utils_1.joinRoutes)(basePath, controllerConfig?.destroy), middlewares.destroy, controller.destroy);
        return router;
    }
}
exports.default = BRouter;
//# sourceMappingURL=BRouter.js.map