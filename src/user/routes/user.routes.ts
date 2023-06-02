/* Required External Modules and Interfaces */

import express, { NextFunction, Request, Response } from "express";
import { createUserController } from "../controllers/user.controller";

/* Router Definition */

export const userRouter = express.Router();

/* Router & Controller Definitions */

// Create user
userRouter.post('/create-user', createUserController)