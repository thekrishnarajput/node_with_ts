import { Request } from "express";

export interface TypeInterface extends Request {
    user?: any;
}

export let int = (params: (string | number)) => {
    return +(params);
}

export let toStrings = (params: any) => {
    return (params + "");
}

export let stringify = (params: any) => {
    return JSON.stringify(params);
}
