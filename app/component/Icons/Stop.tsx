import type { IIconsChild } from "@/app/types/types";
import { Icon } from "./Base/Icon";

export const IconStop = ({ action }: IIconsChild) => {
	return (
		<Icon
			name="stop"
			action={action}
			moreAttributes={{
				viewBox: "0 0 24 24",
			}}
		>
			<rect x="6" y="4" width="4" height="16" />
			<rect x="14" y="4" width="4" height="16" />
		</Icon>
	);
};
