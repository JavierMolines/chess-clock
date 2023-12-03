import { useClockStore } from "@/app/store/gameStore";
import { IModelSelect } from "@/app/types/types";
import "./index.css";

export const ModalSelection = ({ callback }: IModelSelect) => {
	const times = [1, 3, 5, 10, 15, 30];
	const { timeToPlay, setTime } = useClockStore();

	const handlerSelectTime = (time: number) => {
		setTime({ ...timeToPlay, minute: time });
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
