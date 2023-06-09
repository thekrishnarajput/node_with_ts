/* Required External Modules */
import * as dotenv from "dotenv";
/* Configure dotenv file */
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";

import { itemRouter } from "./items/routes/items.routes";

import { adminAutoCreate } from "./admin/controllers/admin.controller";

import { connectDB } from "./db";
import { adminRouter } from "./admin/routes/admin.routes";
import { userRouter } from "./user/routes/user.routes";

let host: string = "127.0.0.1"
/* App Variables */

if (!process.env.PORT) {
    process.exit(1);
}

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    next(res.status(404).json({
        success: false,
        message: "URL not found!",
        data: null
    }));
};

const PORT: number = +process.env.PORT;

const app = express();

/* App Configuration */

// helmet() adds security-related HTTP headers
app.use(helmet());

// cors() enables cross-origin requests
app.use(cors());

// express.json() parses JSON data in request bodies
app.use(express.json());

// Connect to DB
connectDB();

// Item router
app.use('/api/menu/items', itemRouter);

// Admin router
app.use('/api/admin', adminRouter);

// User router
app.use('/users', userRouter);

// Not found handler
app.use(notFoundHandler);

/* Server Activation */

app.listen(PORT, () => {
    console.log(`Server is running on ${host}:${PORT}`);
    adminAutoCreate();
});