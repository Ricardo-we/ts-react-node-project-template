import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { FC } from "react";

interface BSelectProps {
	onChange?: (event: any) => any;
	value?: any;
	name?: string;
	label?: string;
	items?: Array<{ label?: string; value: any }>;
}

const BSelect: FC<BSelectProps> = ({ onChange, value, name, items, label }) => {
	return (
		<FormControl sx={{minWidth: 150}}>
			<InputLabel>{label}</InputLabel>
			<Select
				value={value}
				name={name}
				variant="filled"
				onChange={onChange}
				label={label}
			>
				{items &&
					items?.map((item) => (
						<MenuItem value={item.value}>
							{item.label || item.value}
						</MenuItem>
					))}
			</Select>
		</FormControl>
	);
};

export default BSelect;
