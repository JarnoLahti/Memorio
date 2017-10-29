import { Response,NextFunction } from "express";

export default function (req:Request, res:Response, next:NextFunction) {
    if(req.url.indexOf('/api/') === -1
    && req.url.indexOf('.js') === -1
    && req.url.indexOf('.css') === -1){
        res.redirect('/');
    }
    next();
}
