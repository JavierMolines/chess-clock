import { Icon } from "./Base/Icon";

export const IconPlay = () => {
	return (
		<Icon
			action={() => console.log("PLAY")}
			moreAttributes={{
				viewBox: "0 0 24 24",
			}}
		>
			<polygon points="5 3 19 12 5 21 5 3" />
		</Icon>
	);
};
