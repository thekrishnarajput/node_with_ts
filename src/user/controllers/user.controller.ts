import { UserInterface } from "../interfaces/userCommon.interface";
import { Response, NextFunction } from "express";
import usersModel from "../models/users.model";
import { ErrData } from "../../utils/common/http-exception";
import { response, messages } from "../../utils/middleware/util.middleware";
import { TypeInterface as Request, toStrings } from "../../utils/common/types.interface";
import { Enum } from "../../utils/common/enum";
import { hashPassword } from "../../utils/common/hashing";
import { AnyARecord } from "dns";

// Create user method
export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let Body: UserInterface = req.body;
        let userResult: UserInterface | null = await usersModel.findUserByEmailOrMobile(req.body);
        if (userResult) {
            throw ErrData(Enum.forbidden, messages.userNotSaved(), false);
            // return response(res, Enum.forbidden, false, messages.userNotSaved(), null);
        }
        Body.password = await hashPassword(Body.password);
        Body.status = Enum.inactiveStatus;
        Body.role = Enum.userRoleId;
        let saveResult: UserInterface = await usersModel.createUser(Body);
        return response(res, Enum.ok, true, "User account is created successfully!", saveResult);
    }
    catch (error: any) {
        // console.error("Catch error:-", error);
        next(error);
    }
}