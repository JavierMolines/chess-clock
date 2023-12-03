import { useClockStore } from "@/app/store/gameStore";
import { IIcon } from "@/app/types/types";

export const Icon = ({
	action,
	moreAttributes,
	children,
	name = "clock",
}: IIcon) => {
	const { gameRunning, timeRunning, endGame } = useClockStore();
	const mapping = {
		play: endGame ? false : gameRunning && !timeRunning,
		stop: endGame ? false : gameRunning && timeRunning,
		reset: endGame ? true : gameRunning && !timeRunning,
		clock: endGame ? false : !gameRunning && !timeRunning,
	};

	const isActive = mapping[name];
	const colorIcon = isActive ? "#000000" : "#999966";

	return (
		<button
			disabled={!isActive}
			type="button"
			style={{
				border: "none",
				background: "none",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				fill="none"
				stroke={colorIcon}
				strokeWidth="2"
				onClick={action}
				{...moreAttributes}
			>
				{children}
			</svg>
		</button>
	);
};
