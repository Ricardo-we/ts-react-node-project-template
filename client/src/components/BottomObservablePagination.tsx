import { LegacyRef, forwardRef } from "react";

import { CircularProgress } from "@mui/material";

interface BottomObservableProps {
    loading?:boolean
}
 
const BottomObservablePagination = forwardRef(({loading=false}:BottomObservableProps, ref: LegacyRef<HTMLDivElement>) => {

    return ( 
        <>
            <div style={{height: 20}} ref={ref}></div>
            <div style={{ width: "100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                {loading && <CircularProgress disableShrink />}
            </div>
        </>
    );
})
 
export default BottomObservablePagination;