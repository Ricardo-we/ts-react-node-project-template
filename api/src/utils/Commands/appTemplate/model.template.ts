export default (appName:string, appNamePascalCase: string) => `
import DbRepository from "../../services/db/DbRepository";
import { IdField } from "../../utils/Db/db.fields";

const conn = DbRepository.getConnection("mssql");

const ${appNamePascalCase} = conn.define("${appName.replace("-", "_")}", {
    id: IdField()
})

export {
    ${appNamePascalCase},
}
`