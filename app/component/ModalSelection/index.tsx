import "./index.css";
import { IModelSelect } from "@/app/types/types";
import { useClockStore } from "@/app/store/gameStore";

export const ModalSelection = ({ callback }: IModelSelect) => {
	const times = [1, 3, 5, 10, 15, 30];
	const { timeToPlay, stageTime } = useClockStore();

	const handlerSelectTime = (time: number) => {
		stageTime({ ...timeToPlay, minute: time });
		callback();
	};

	return (
		<section className="modalSelection flex">
			<main className="cardOptions flex spacesPadding">
				<h2>Select time to play</h2>
				<div className="flex spacesPadding maxWidth">
					{times.map((time) => (
						<button
							className={`buttonOptionSelect ${
								time === timeToPlay.minute ? "optionSelectTime" : ""
							}`}
							onClick={() => handlerSelectTime(time)}
							type="button"
							key={time}
						>
							{time} min
						</button>
					))}
				</div>
			</main>
		</section>
	);
};
