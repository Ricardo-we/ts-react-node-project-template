
export function firstLetterUppercase(word: string) {
    let firstLetterUppercase = word[0].toUpperCase();
    return firstLetterUppercase + word.substring(1);
}


export function firstLetterLowercase(word: string) {
    let firstLetterUppercase = word[0].toLowerCase();
    return firstLetterUppercase + word.substring(1);
}

export function dashedToPascalCase(word: string) {
    const firstLetterUpperCasedWord = firstLetterUppercase(word)
    return firstLetterUpperCasedWord
        .trim()
        .split("-")
        .map(singleWord => firstLetterUppercase(singleWord))
        .join("");
}