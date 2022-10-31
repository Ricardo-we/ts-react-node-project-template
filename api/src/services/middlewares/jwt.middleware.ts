import { NextFunction, Request, Response } from "express";

import appConfig from "../../config";
import { errorResponse } from "../../utils/controller.utils";
import jwt from "jsonwebtoken";

export function generateJWT(payload: object){
    return jwt.sign(payload, appConfig.JWT_HASH);
}

export function decodeToken(token: string){
    return jwt.verify(token, appConfig.JWT_HASH);
}

export function AuthMiddleware(req: any, res: Response, next: NextFunction){
    try{
        if(!req?.headers?.authorization) throw new Error("Not token in headers");
        const decodedToken = decodeToken(req.headers.authorization.split(" ")[1])
        req.user = decodedToken;
        return next();
    } catch(error){
        return res.json(errorResponse(error));
    }
}

