export const handleSuccessResponse = (toast: any, reloadData=()=>{}) => {
    return () => {
        reloadData();
        toast?.success("Acción completeda")
    }
}
        
export const handleErrorResponse = (toast: any) =>{
    return (err: any) => toast.error(err.toString());
}