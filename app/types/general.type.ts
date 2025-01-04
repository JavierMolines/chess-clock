import type { MouseEventHandler } from "react";

export interface IIconsChild {
	name?: "play" | "stop" | "reset" | "clock";
	action?: () => void;
}

export interface IIcon extends IIconsChild {
	moreAttributes: React.SVGAttributes<SVGSVGElement>;
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
	callback: () => void;
}
