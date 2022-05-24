
let getServerPort = () => {
    let serverPort = process.env.serverPort;
    if (serverPort > 0)
        return serverPort;
    else
        return 5500;
}

let getNodeEnv = () => {
    let nodeEnv = process.env.NODE_ENV;
    if (nodeEnv)
        return nodeEnv;
    else
        return "production";
}


let getDbPort = () => {
    let dbPort;
    if (process.env.NODE_ENV == 'development')
        dbPort = process.env.localDbPort;
    else
        dbPort = process.env.dbPort;

    if (dbPort > 0)
        return dbPort;
    else
        return 5432;
}

let getDbPassword = () => {
    let dbPassword;
    if (process.env.NODE_ENV == 'development')
        dbPassword = process.env.localDbPass;
    else
        dbPassword = process.env.dbPass;

    if (dbPassword)
        return dbPassword;
    else
        return "";
}

let getDbName = () => {
    let dbName;
    if (process.env.NODE_ENV == 'development')
        dbName = process.env.localDbName;
    else
        dbName = process.env.dbName;

    if (dbName)
        return dbName;
    else
        return "";
}

let getDbHost = () => {
    let dbHost;
    if (process.env.NODE_ENV == 'development')
        dbHost = process.env.localDbHost;
    else
        dbHost = process.env.dbHost;

    if (dbHost)
        return dbHost;
    else
        return "";
}

let getDbUser = () => {
    let dbUser;
    if (process.env.NODE_ENV == 'development')
        dbUser = process.env.localDbUser;
    else
        dbUser = process.env.dbUser;

    if (dbUser)
        return dbUser;
    else
        return "";
}

module.exports = {
    getServerPort,
    getNodeEnv,
    getDbPort, 
    getDbPassword, 
    getDbName, 
    getDbHost, 
    getDbUser
}