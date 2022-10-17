import { Options, Sequelize } from "sequelize"

import ConnectorBase from "./ConnectorBase"

export interface SqlConnectorConfig extends Options {
    dbName: string;
    username: string;
    password?: string;
}

export default class SqlConnector implements ConnectorBase {
    constructor(){}

    static getConnection(connectionConfig: SqlConnectorConfig): Sequelize {
        const sequelize = new Sequelize(
            connectionConfig?.dbName || "",
            connectionConfig?.username || "",
            connectionConfig?.password || "",
            {
                ...connectionConfig
            }
        );
        return sequelize;
    };

}