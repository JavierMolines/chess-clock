import type { IComboNumbers } from "@/app/types/types";

export const ComboNumbers = ({
	second,
	hour,
	minute,
	textInverse,
	onClick,
	disabled,
}: IComboNumbers) => {
	const format = (value: number) => {
		return String(value).padStart(2, "0");
	};

	const customStyles = {
		transform: textInverse ? "rotate(180deg)" : "rotate(0deg)",
	};

	const SeparatorNumbers = () => (
		<span
			style={{
				marginBottom: "4px",
			}}
		>
			:
		</span>
	);

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			type="button"
			style={customStyles}
			className="clockItems"
		>
			<span>{format(hour)}</span>
			<SeparatorNumbers />
			<span>{format(minute)}</span>
			<SeparatorNumbers />
			<span>{format(second)}</span>
		</button>
	);
};
