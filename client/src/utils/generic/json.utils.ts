    
export function safeJsonParse(value: string){
    try {
        return JSON.parse(value)
    } catch (error) {
        return {}
    }
}