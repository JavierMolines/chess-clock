import { configIcon } from "./settings";

interface IIcon {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	moreAttributes?: any;
	action?: Function;
	children: React.ReactNode;
}

export const Icon = ({ action, moreAttributes, children }: IIcon) => {
	return (
		// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={configIcon.width}
			height={configIcon.height}
			fill={configIcon.fill}
			stroke={configIcon.stroke}
			strokeWidth={configIcon.strokeWidth}
			onClick={action}
			{...moreAttributes}
		>
			{children}
		</svg>
	);
};
