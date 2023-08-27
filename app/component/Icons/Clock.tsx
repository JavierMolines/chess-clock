import { Icon } from "./Base/Icon";
import { IIconsChild } from "@/app/types/types";

export const IconClock = ({ action }: IIconsChild) => {
	return (
		<Icon
			name="clock"
			action={action}
			moreAttributes={{
				viewBox: "0 0 24 24",
			}}
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</Icon>
	);
};
