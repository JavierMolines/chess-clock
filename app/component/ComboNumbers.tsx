import { IComboNumbers } from "../types/types";

export const ComboNumbers = ({
	second,
	hour,
	minute,
	textInverse,
	onClick,
}: IComboNumbers) => {
	const format = (value: number) => {
		return String(value).padStart(2, "0");
	};

	const customStyles = {
		transform: textInverse ? "rotate(180deg)" : "rotate(0deg)",
	};

	return (
		<button
			onClick={onClick}
			type="button"
			style={customStyles}
			className="clockItems"
		>
			<span>{format(hour)}</span>
			<span>:</span>
			<span>{format(minute)}</span>
			<span>:</span>
			<span>{format(second)}</span>
		</button>
	);
};
