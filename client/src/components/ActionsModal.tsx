import { Box, Button, Typography } from "@mui/material";

import BModal from "./BModal";
import { FC } from "react";

interface ActionsModalProps {
	visible: boolean;
	onClose: () => any;
	children?: JSX.Element | JSX.Element[] | string | string[];
	mainTitle?: string | JSX.Element | JSX.Element[];
}

const ActionsModal: FC<ActionsModalProps> = ({
	mainTitle,
	visible,
	onClose,
	children,
}) => {
	return (
		<BModal
			visible={visible}
			style={{ width: "50%", maxWidth: 800, minWidth: 300, borderRadius: 5, padding: 4 }}
			onClose={onClose}
		>
            <>
                {mainTitle ? mainTitle : (
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", width: "100%", marginBottom: 2 }}
                    >
                        Acción a realizar
                    </Typography>
                )}
            </>

			
        <>
            {children}
        </>
				
		</BModal>
	);
};


export default ActionsModal;
