import type { IIconsChild } from "@/app/types/general.type";
import { Icon } from "./Base/Icon";

export const IconPlay = ({ action }: IIconsChild) => {
	return (
		<Icon
			name="play"
			action={action}
			moreAttributes={{
				viewBox: "0 0 24 24",
			}}
		>
			<polygon points="5 3 19 12 5 21 5 3" />
		</Icon>
	);
};
