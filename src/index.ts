/* Required External Modules */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { itemRouter } from "./items/items.routes";

import { errorHandler } from "./middleware/error.middleware";

import { notFoundHandler } from "./middleware/not-found.middleware";

/* Configure dotenv file */
dotenv.config();
let host: string = "127.0.0.1"
/* App Variables */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = +process.env.PORT;

const app = express();

/* App Configuration */

// helmet() adds security-related HTTP headers
app.use(helmet());

// cors() enables cross-origin requests
app.use(cors());

// express.json() parses JSON data in request bodies
app.use(express.json());

app.use('/api/menu/items', itemRouter);

// Error handler
app.use(errorHandler);

// Not found handler
// app.use(notFoundHandler);

/* Server Activation */

app.listen(PORT, () => {
    console.log(`Server is running on ${host}:${PORT}`);
})