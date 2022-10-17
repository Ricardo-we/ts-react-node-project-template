import { Options, Sequelize } from "sequelize"

import SqlConnector from "./SqlConnector"
import appConfig from "../../config";

export type connectionTypes = "mssql"

export default class DbRepository {

    static getConnection(connectionType: connectionTypes): Sequelize{
        const { dbName, password, username} = appConfig.DB_CONFIG;
        if (connectionType === "mssql") {
            return SqlConnector.getConnection({
                dialect: 'mssql',
                host: "localhost",
                dbName,
                password,
                username,
                // port: 1464,
                dialectOptions: {
                    options: {
                        trustedconnection: false,
                        encrypt: false,
                        trustServerCertificate: false,
                        enableArithAbort: false,
                    }
                }
            });
        }
        return new Sequelize();
    }
}