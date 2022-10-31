export function errorResponse(error: Error | any){
    console.log(error.name, error.message);
    if(!error.name || !error.message) return {
        error: "Unkown",
        message: "Unknown reason"
    }
    return {
        error: error.name,
        message: error.message
    }
}