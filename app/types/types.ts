import { MouseEventHandler } from "react";

export interface IIconsChild {
	name?: "play" | "stop" | "reset" | "clock";
	action?: Function;
}

export interface IIcon extends IIconsChild {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	moreAttributes?: any;
	children: React.ReactNode;
}

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

export interface IModelSelect {
	callback: Function;
}
