import { Icon } from "./Base/Icon";
import { IIconsChild } from "@/app/types/types";

export const IconStop = ({ action, enabledIcon }: IIconsChild) => {
	return (
		<Icon
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
