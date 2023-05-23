import jwt from "jsonwebtoken";
const secret = (process.env.JWT_SECRET + "");
import { Request, Response, NextFunction } from "express";
import { response } from "./util.middleware";

interface AuthInterface extends Request {
    user?: any;
}

// Auth middleware for route authentication
export const auth = async (req: AuthInterface, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return response(res, 401, false, "Authentication failed. No token provided!", null);
    }
    try {
        let decoded: any = jwt.verify(token, secret);
        if (decoded) {
            delete decoded.iat && delete decoded.exp && delete decoded.__v;
            req.user = decoded;
            next();
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        return response(res, 403, false, "Invalid token!", error);
        // next(error);
    }
}


export const genToken = async (params: any) => {
    const options = {
        expiresIn: '24h' // Set the expiry period (e.g., 24 hours)
    };
    let token: string = jwt.sign(params, secret, options);
    return token;
};

export const verifyToken = async (token: string) => {
    try {
        return jwt.verify(token, secret)
    }
    catch (error) {
        return null;
    }
};