## Create app command
Create an "app": `npm run commands createapp <appname>` 
Sync all models: `npm run sync-models`

## Bulk data
To create/insert bulk easily use the app-settings, put the appname that needs to bulk data in `BULK_LIST:[]`,
app should contain a `dataBulk.ts` file inside this file `export async function bulkData() {}` only export not export default
Then run `npm run bulk-data`

## Exporting routers and models
To export models use 
```
export {
    Model1,
    Model2
}
```
And exporting routers you can export default one or multiple like this
```
export default [router1, router2]
```
If your app is registered in `src/config/index.ts`

```
export default {
    APP_PORT: process.env.port || 8000,
    DB_CONFIG: {
        username: process.env.PSQL_USER || "",
        dbName: process.env.PSQL_DB_NAME || "",
        password: process.env.PSQL_PASSWORD || "",
    },
    CLOUDINARY_CONFIG: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    },
    HIDE_LOGS: false,
    APP_ROOT: path.join(__dirname, ".."),
->    apps: ["users", "cards"],     <-
    JWT_HASH: process.env.JWT_HASH || ""
}
```
Add the name of the folder and then all those exports will be considered on the sync-models and routes of the app