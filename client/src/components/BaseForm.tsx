import * as yup from "yup";

import { Box, Button, CircularProgress, Color } from "@mui/material";
import { CSSProperties, FC } from "react";
import { Form, Formik } from "formik";

export type colors =
	| "primary"
	| "secondary"
	| "error"
	| "warning"
	| "info"
	| "success";

interface BaseFormProps {
	onSubmit: (data: any) => any;
	children?: JSX.Element | JSX.Element[];
	initialValues: object;
	validationSchema?: yup.AnySchema;
	spinnerColor?: colors;
	buttonText?: string;
	isSubmitting?: boolean;
	style?: CSSProperties;
    className?: string;
}

const BaseForm: FC<BaseFormProps> = ({
	onSubmit,
	children,
	initialValues,
	spinnerColor = "primary",
	isSubmitting,
	style,
    className,
	...props
}) => {
	return (
		<form style={style} className={className} onSubmit={onSubmit}>
			{children}

			<Box
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{isSubmitting ? (
					<CircularProgress color={spinnerColor} />
				) : (
					<Button type="submit" style={{ width: "100%" }}>
						{props?.buttonText}
					</Button>
				)}
			</Box>
		</form>
	);
};

export default BaseForm;
