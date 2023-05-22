/* Required External Modules and Interfaces */

import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { AdminInterface } from "../schemas/admin.schema";
import adminModel from "../models/admin.model";


// Auto create admin
export const adminAutoCreate = async () => {
    try {
        let salt = bcrypt.genSaltSync(12);
        let hash = bcrypt.hashSync((process.env.ADMIN_PASSWORD + ""), salt);
        let adminDataArray: any = [
            // new adminModel(
            {
                name: "Krishna",
                email: "krishna@yopmail.com",
                mobile_number: 8818898868,
                password: hash,
                status: 1,
                role: 1,
            }
            // ),
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

export const adminLoginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let body = req.body;

    }
    catch (error) {
        console.error("Catch error:-", error);
        res.status(500).send(error);
    }
}