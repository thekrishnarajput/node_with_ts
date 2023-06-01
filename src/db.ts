import mongoose from "mongoose";


/* Connect to DB function */

export const connectDB = async () => {
    try {
        const con = await mongoose.connect((process.env.DB_URI + ""));
        let dbName: string = con.connection.name;
        console.log(`DB connected: "${dbName}"`);
    }
    catch (error) {
        console.error(`DB connection error: ${error}`);
        process.exit(1);
    }
};

/* Export DB connection function */
export const db = mongoose.connection;