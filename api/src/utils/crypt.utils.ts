import bcrypt from "bcrypt";

export function encryptWord(plainText: string){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainText, salt);
}

export function comparePlainToEncrypted(plainText: string, hashedText: string){
    return bcrypt.compareSync(plainText, hashedText); 
}