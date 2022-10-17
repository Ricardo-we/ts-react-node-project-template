import dotenv from "dotenv"
import path from "path"

dotenv.config();
export default {
    APP_PORT: process.env.port || 8000,
    DB_CONFIG: {
        username: process.env.SQS_DB_USER || "",
        dbName: process.env.SQS_DB_NAME || "",
        password: process.env.SQS_DB_PASSWORD || "",
    },
    HIDE_LOGS: false,
    APP_ROOT: path.join(__dirname, ".."),
    apps: [
        "users"
    ]
}
