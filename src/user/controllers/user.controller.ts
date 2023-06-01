import { UserInterface } from "../interfaces/userCommon.interface";
import { Response, NextFunction } from "express";
import usersModel from "../models/users.model";
import { ErrData } from "../../utils/common/http-exception";
import { response, messages } from "../../utils/middleware/util.middleware";
import { TypeInterface as Request, toStrings } from "../../utils/common/types.interface";
import { Enum } from "../../utils/common/enum";
import { hashPassword } from "../../utils/common/hashing";

// Create user method
export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let Body: UserInterface = req.body;
        Body.password = await hashPassword(Body.password);
        let userObj: UserInterface = {
            full_name: Body.full_name,
            email: Body.email,
            password: Body.password,
            role: Enum.userRoleId,
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        next(error);
    }
}