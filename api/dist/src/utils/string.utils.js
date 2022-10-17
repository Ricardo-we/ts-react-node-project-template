"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashedToPascalCase = exports.firstLetterLowercase = exports.firstLetterUppercase = void 0;
function firstLetterUppercase(word) {
    let firstLetterUppercase = word[0].toUpperCase();
    return firstLetterUppercase + word.substring(1);
}
exports.firstLetterUppercase = firstLetterUppercase;
function firstLetterLowercase(word) {
    let firstLetterUppercase = word[0].toLowerCase();
    return firstLetterUppercase + word.substring(1);
}
exports.firstLetterLowercase = firstLetterLowercase;
function dashedToPascalCase(word) {
    const firstLetterUpperCasedWord = firstLetterUppercase(word);
    return firstLetterUpperCasedWord
        .trim()
        .split("-")
        .map(singleWord => firstLetterUppercase(singleWord))
        .join("");
}
exports.dashedToPascalCase = dashedToPascalCase;
//# sourceMappingURL=string.utils.js.map