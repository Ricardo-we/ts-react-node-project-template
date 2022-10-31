import { CSSProperties, FC, MouseEvent } from "react";

import { Button } from "@mui/material";

interface BButtonProps {
    children: JSX.Element | JSX.Element[] | string | string[];
    style?: CSSProperties
    onClick?: (e: MouseEvent<HTMLButtonElement>) => any
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}
 
const BButton: FC<BButtonProps> = ({ children, onClick, style, color}) => {
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            style={style}
            color={color}
        >
            {children}
        </Button>
    );
}
 
export default BButton;