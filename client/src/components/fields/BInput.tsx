import { BaseTextFieldProps, FormHelperText, TextField } from "@mui/material";
import { CSSProperties, FC } from "react";
import { Field, FieldProps } from "formik";

import { Input } from "@mui/material";

interface BInputProps {
	error?: string;
	name: string;
	value: any;
	variant?: "filled" | "standard" | "outlined";
	onChange: (data: any) => any;
	style?: CSSProperties;
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
			{...props}
		/>
	);
};

export default BInput;
