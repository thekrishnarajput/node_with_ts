import bcrypt from "bcryptjs";
import { toStrings } from "./types.interface";

export const hashPassword = async (password: string) => {
    let salt = bcrypt.genSaltSync(12);
    let hash = toStrings(bcrypt.hashSync(password, salt));
    return hash;
}

export const comparePassword = (bodyPassword: string, dbPassword: string) => {
    let compareResult = bcrypt.compareSync(bodyPassword, dbPassword);
    return compareResult;
}