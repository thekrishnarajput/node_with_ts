/* Required External Modules and Interfaces */

import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { AdminInterface } from "../interfaces/adminCommon.interface";
import adminModel from "../models/admin.model";
import { ErrData } from "../../utils/common/http-exception";
import { genToken } from "../../utils/middleware/token.middleware";
import { response } from "../../utils/middleware/util.middleware";
import { Enum } from "../../utils/common/enum";
import { int, toStrings } from "../../utils/common/types.interface";
import { comparePassword, hashPassword } from "../../utils/common/hashing";
const adminPwd = toStrings(process.env.ADMIN_PASSWORD);
const adminNo = toStrings(process.env.ADMIN_NO);

// Auto create admin
export const adminAutoCreate = async () => {
    try {
        // let salt = bcrypt.genSaltSync(12);
        // let hash = toStrings(bcrypt.hashSync(adminPwd, salt));
        let hash = await hashPassword(adminPwd);
        let adminDataArray: Array<any> = [
            {
                full_name: "Krishna",
                email: "krishna@yopmail.com",
                mobile_number: int(adminNo),
                password: hash,
                status: Enum.activeStatus,
                role: Enum.adminRoleId,
            }
        ];

        adminDataArray.forEach(async (result: any) => {
            let adminResult = await adminModel.getAdmin((result.email + ""));
            if (adminResult) {
                console.log("Admin is already created!");
            }
            else {
                let createResult = await adminModel.saveAdmin(result);
                if (createResult) {
                    console.log("Admin created successfully!");
                }
            }
        })
    }
    catch (error) {
        console.error("Catch error:-", error);
    }
}

// Admin login
export const adminLoginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let Body = req.body;
        Body.email = (Body.email + "").trim();
        Body.password = (Body.password + "").trim();
        let adminData: any = await adminModel.getAdmin(Body.email);
        if (adminData) {
            if (comparePassword(Body.password, adminData.password)) {
                adminData = adminData.toObject();
                delete adminData.password;
                let token = await genToken(adminData);
                let responseData = { token, ...adminData };
                return response(res, Enum.ok, true, "Item details has been updated successfully!", responseData);
            }
            else {
                throw ErrData(Enum.unauthorized, "Password is incorrect!", false);
            }
        }
        else {
            throw ErrData(Enum.notFound, "Admin account not found!", false);
        }
    }
    catch (error) {
        console.error("Catch error:-", error);
        next(error);
    }
}