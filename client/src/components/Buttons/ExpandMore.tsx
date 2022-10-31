import { IconButton, IconButtonProps, styled } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
	label?: string;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, label,...other } = props;
	return (
	<>
		<h4 style={{display: "inline-block"}}>{label}</h4>
		<IconButton {...other}>
			<span className="material-icons">expand_more</span>
		</IconButton>
	</>
	);
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default ExpandMore;
