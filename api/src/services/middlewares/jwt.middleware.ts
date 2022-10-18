import { NextFunction, Request, Response } from "express";

import appConfig from "../../config";
import jwt from "jsonwebtoken";

export function generateJWT(payload: object){
    return jwt.sign(payload, appConfig.JWT_HASH,  { algorithm: 'RS256'});
}

export function decodeToken(token: string){
    return jwt.verify(token, "Invalid token");
}


export function AuthMiddleware(req: Request, res: Response, next: NextFunction){
    if(!req?.headers?.authorization) throw new Error("Not token in headers");
    const decodedToken = decodeToken(req.headers.authorization.split("Bearer")[1])
    req.user = decodeToken;
    return next();
}
