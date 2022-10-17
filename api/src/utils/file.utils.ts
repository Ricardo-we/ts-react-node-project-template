import { mkdirSync, writeFileSync } from "fs";

export function writeFileSyncSafe(filePath: string, content: string): string | false{
    try {
        writeFileSync(filePath, content)
        return filePath
    } catch (error) {
        return false
    }
}

export function mkdirSyncSafe(filePath: string): string | false{
    try {
        mkdirSync(filePath)
        return filePath
    } catch (error) {
        return false
    }
}
