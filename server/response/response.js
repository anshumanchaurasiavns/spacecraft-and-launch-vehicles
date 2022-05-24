

//**************************************************************************************************************************/

let formatResponse = (statusCode, result, message) => {
    if (statusCode == 500) {
        // console.log("Exception Logs:", message, result);
        result = null;
    }
    return ({ status: statusCode, result: result, message: message });
}

let returnResponse = (res, responseObject) => {

    

    if (typeof responseObject.status == "undefined")
        responseObject = formatResponse(500, responseObject, "Exception Occured...");

    res.status = responseObject.status;
    return res.send(responseObject);
}

let formatReturnResponse = (res, statusCode, result, message) => {
    let responseObject = { status: statusCode, result: result, message: message };
    

    res.status = statusCode;
    return res.send(responseObject);
}
//**************************************************************************************************************************/

module.exports = {
    formatResponse,
    returnResponse,
    formatReturnResponse
};