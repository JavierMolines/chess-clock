import { Icon } from "./Base/Icon";
import { IIconsChild } from "@/app/types/types";

export const IconClock = ({ action, enabledIcon }: IIconsChild) => {
	return (
		<Icon
			action={() => console.log("CLOCK")}
			moreAttributes={{
				viewBox: "0 0 24 24",
			}}
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</Icon>
	);
};
