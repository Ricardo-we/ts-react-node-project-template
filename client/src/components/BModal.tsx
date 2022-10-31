import { Box, Button, Modal, Typography } from "@mui/material";
import { CSSProperties, FC } from "react";

interface BModalProps {
	visible: boolean;
	onClose: () => any;
	style?: CSSProperties
    children?: JSX.Element | JSX.Element[];
}

const BModal: FC<BModalProps> = ({ visible, onClose, children, style }) => {
	return (
		<Modal
			open={visible}
			onClose={onClose}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "space-evenly",
					width: "80%",
					outline: "none",
					overflowY: "auto",
					...style
				}}
				bgcolor="white"
			>
                {children}
            </Box>
		</Modal>
	);
};

export default BModal;
