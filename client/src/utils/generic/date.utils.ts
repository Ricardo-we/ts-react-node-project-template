export function getISODate(date?: string | Date): string{
    return new Date(date || new Date()).toISOString().split("T")[0]
}