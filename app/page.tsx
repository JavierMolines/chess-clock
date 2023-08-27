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
		gameOn,
		gameStop,
		ownerTime,
		inviteTime,
		turn,
		handleTurn,
		handlerGameFlow,
		resetGame,
	} = useMovement();

	const statusButtonOwner = gameStop || (gameOn && turn === false);
	const statusButtonVisit = gameStop || (gameOn && turn === true);
	const handlerIconStatus = gameStop ? false : gameOn;

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
				<IconClock />
				{handlerIconStatus ? (
					<IconStop action={handlerGameFlow} />
				) : (
					<IconPlay action={handlerGameFlow} />
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
