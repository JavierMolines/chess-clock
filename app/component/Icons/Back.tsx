import { IIconsChild } from "@/app/types/types";
import { Icon } from "./Base/Icon";

export const IconBack = ({ action }: IIconsChild) => {
	return (
		<Icon
			name="reset"
			action={action}
			moreAttributes={{
				viewBox: "0 0 24 24",
			}}
		>
			<path d="M17 2.1l4 4-4 4" />
			<path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4" />
			<path d="M21 11.8v2a4 4 0 0 1-4 4H4.2" />
		</Icon>
	);
};
