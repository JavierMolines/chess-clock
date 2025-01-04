import { useClockStore } from "@/app/store/gameStore";
import type { IModelSelect } from "@/app/types/general.type";
import { setTimingPlay } from "@/app/utils/storage";
import "./index.css";
import { TIMES_MODAL_SELECTION } from "./data";

export const ModalSelection = ({ callback }: IModelSelect) => {
	const { timeToPlay, setTime } = useClockStore();

	const isSelectedRow = (time: number) =>
		`buttonOptionSelect ${time === timeToPlay.minute ? "optionSelectTime" : ""}`;

	const handlerSelectTime = (time: number, unit: "min" | "hour") => {
		const isHour = unit === "hour";
		const handlerTime = {
			minute: isHour ? 0 : time,
			hour: isHour ? time : 0,
		};

		const newTimeGame = { ...timeToPlay, ...handlerTime };

		setTime(newTimeGame);
		setTimingPlay(newTimeGame);
		callback();
	};

	return (
		<section className="modalSelection flex">
			<main className="cardOptions flex spacesPadding">
				<button onClick={() => callback()} type="button">
					<img className="closeIcon" src="/close.svg" alt="not found" />
				</button>

				<h2>Select time to play</h2>
				<div className="flex spacesPadding maxWidth">
					{TIMES_MODAL_SELECTION.map(({ unit, number }) => (
						<button
							className={isSelectedRow(number)}
							onClick={() => handlerSelectTime(number, unit as "min" | "hour")}
							type="button"
							key={`${number}-${unit}`}
						>
							{`${number} ${unit}`}
						</button>
					))}
				</div>
			</main>
		</section>
	);
};
