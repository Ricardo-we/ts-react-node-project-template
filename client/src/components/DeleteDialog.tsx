import { Box, Button, Dialog, Typography } from "@mui/material";

import { FC } from "react";

interface DeleteDialogProps {
    title?: string; 
    onDeleteItem?: () => any;
    onClose?: () => any;
    visible: boolean
}

const DeleteDialog: FC<DeleteDialogProps> = ({title, onDeleteItem, onClose, visible}) => {
	return (
		<Dialog
			open={visible}
			onClose={onClose}
		>
			<Typography
				variant="h4"
				sx={{
					width: "80%",
					textAlign: "center",
					marginBlock: 5,
					margin: "auto",
				}}
			>
				{title? title : "Está seguro de eliminar este registro?"}
			</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					marginBlock: 3,
				}}
			>
				<Button
					variant="outlined"
					color="primary"
					onClick={onClose}
				>
					Cancelar
				</Button>
				<Button
					variant="outlined"
					color="error"
					onClick={onDeleteItem}
				>
					Confirmar
				</Button>
			</Box>
		</Dialog>
	);
};

export default DeleteDialog;
