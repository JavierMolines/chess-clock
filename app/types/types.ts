import { MouseEventHandler } from "react";

export interface ClockProps {
	hour: number;
	second: number;
	minute: number;
}

export interface IComboNumbers extends ClockProps {
	onClick: MouseEventHandler;
	textInverse?: boolean;
	disabled: boolean;
}
