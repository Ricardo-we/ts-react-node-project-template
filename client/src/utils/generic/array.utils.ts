export function createFilter(filterBy: any, filter: any) {
    return (currentItem: any, index: number) => {
        const isSimilarText = (typeof currentItem[filterBy] === "string" &&
        currentItem?.[filterBy]?.toLowerCase()?.includes(filter.toLowerCase()));
        const isMoreThan = (typeof currentItem?.[filterBy] === "number" && currentItem?.[filterBy] >= currentItem?.[filterBy]);
        
        return isSimilarText || isMoreThan;
    }
}