/* Required External Modules and Interfaces */

import express from "express";
import { adminLoginController } from "../controllers/admin.controller";

/* Router Definition */

export const adminRouter = express.Router();

/* Router & Controller Definitions */

// Login admin
adminRouter.post('/login', adminLoginController)