## Create app command
Create an "app": `npm run commands createapp <appname>` 
Sync all models: `npm run sync-models`

## Bulk data
To create/insert bulk easily use the app-settings, put the appname that needs to bulk data in `BULK_LIST:[]`,
app should contain a `dataBulk.ts` file inside this file `export async function bulkData() {}` only export not export default
Then run `npm run bulk-data`