export let ErrData = (statusCode: number, message: string, data: any) => {
    let error: any = new Error();
    error.statusCode = statusCode;
    error.data = data;
    error.message = message;
    console.log("error:-", error);
    return error;
}