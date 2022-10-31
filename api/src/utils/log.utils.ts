import appConfig from "../config";
import chalk from "chalk"

const HIDE_LOGS = appConfig?.HIDE_LOGS;

export function blueLog(...message: any){
    return console.log(chalk.blueBright(...message));
}

export function errLog(...message: any){
    return console.log(chalk.redBright(...message));
}


export function safeLogs(...message: any){
    if(HIDE_LOGS) return;
    blueLog(...message);
}

export function safeErrLog(...message: any){
    if(HIDE_LOGS) return;
    errLog(...message);
}
