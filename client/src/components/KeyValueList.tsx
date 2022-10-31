import { Typography, TypographyProps } from "@mui/material";

import { FC } from "react";
import { children } from "../types/Components";

interface KeyValueListProps extends TypographyProps {
    keyName?: string;
    value?: string | Date;
    separator?: string
    children?: children;
    keyFontSize?: number;
}
 
const KeyValueList: FC<KeyValueListProps> = ({ separator=":", keyName, value, children,keyFontSize=15, ...props }) => {
    return ( 
        <Typography {...props}>
            <strong style={{fontSize: keyFontSize}}>{keyName}{separator} </strong>
            {value instanceof Date ? value.toLocaleString(): value}
            {children}
        </Typography>
    );
}
 
export default KeyValueList;