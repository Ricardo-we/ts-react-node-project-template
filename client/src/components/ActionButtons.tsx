import { Box, Button } from "@mui/material";

import BButton from "./Buttons/BButton";
import { FC } from "react";

interface ActionButtonsProps {
	onDelete?: () => any;
	onUpdate?: () => any;
	children?: JSX.Element | JSX.Element[] | string[] | string;
	customLabels?: {
		deleteButton?: string;
		updateButton?: string;
	};
}

const ActionButtons: FC<ActionButtonsProps> = ({
	onDelete,
	onUpdate,
	children,
	customLabels,
}) => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-evenly",
				gap: 1,
			}}
		>
			<BButton
				onClick={() => onDelete && onDelete()}
				color="error"
			>
				{customLabels?.deleteButton || "Eliminar registro"}
			</BButton>
			<BButton
				onClick={() => onUpdate && onUpdate()}
				color="primary"
			>
				{customLabels?.updateButton || "Actualizar registro"}
			</BButton>
			{children}
		</Box>
	);
};

export default ActionButtons;
