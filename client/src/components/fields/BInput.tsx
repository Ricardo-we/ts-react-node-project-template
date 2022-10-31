import { CSSProperties, FC } from "react";
import { InputProps, StandardTextFieldProps, TextField } from "@mui/material";

interface BInputProps {
	error?: string;
	name?: string;
	value?: any;
	variant?: "filled" | "standard" | "outlined";
	onChange?: (data: any) => any;
	style?: CSSProperties;
	type?: string;
	label: string;
	rows?: number;
	multiline?: boolean;
	maxRows?: number;
}

const BInput: FC<BInputProps> = ({
	error = "",
	name = "",
	onChange,
	value,
	variant = "standard",
	...props
}) => {
	const hasError = error?.length > 0;

	return (
		<TextField
			helperText={error}
			variant={variant}
			error={hasError}
			name={name}
			onChange={onChange}
			value={value}
			style={{...props.style, marginBlock: 20, minWidth: 120, maxWidth: 200}}
			InputLabelProps={{
				shrink: props.type === "date" || props.type === "datetime" || props.type === "time" ? true : undefined ,
			}}
			
			{...props}
		/>
	);
};

export default BInput;
