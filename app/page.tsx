"use client";

import "./styles/page.css";
import { ComboNumbers } from "./component/ComboNumbers";
import { useMovement } from "./hooks/useMovement";
import { IconStop } from "./component/Icons/Stop";
import { IconPlay } from "./component/Icons/Play";
import { IconClock } from "./component/Icons/Clock";
import { IconBack } from "./component/Icons/Back";

export default function Home() {
	const {
		gameRunning,
		timeRunning,
		ownerTime,
		inviteTime,
		turn,
		handleTurn,
		handlerGameFlow,
		resetGame,
		handlerTimeClock,
	} = useMovement();

	const statusButtonOwner = gameRunning && turn === false;
	const statusButtonVisit = gameRunning && turn === true;
	const handlerIconStatus = timeRunning === false;

	return (
		<main className="main">
			<ComboNumbers
				disabled={statusButtonOwner}
				onClick={() => handleTurn("OWNER")}
				textInverse
				{...ownerTime}
			/>

			<section>
				<IconBack action={resetGame} />
				<IconClock action={handlerTimeClock} />
				{handlerIconStatus ? (
					<IconPlay action={handlerGameFlow} />
				) : (
					<IconStop action={handlerGameFlow} />
				)}
			</section>

			<ComboNumbers
				disabled={statusButtonVisit}
				onClick={() => handleTurn("VISIT")}
				{...inviteTime}
			/>
		</main>
	);
}
