"use client";

import "./styles/page.css";
import { ComboNumbers } from "./component/ComboNumbers";
import { useMovement } from "./hooks/useMovement";
import { IconStop } from "./component/Icons/Stop";
import { IconPlay } from "./component/Icons/Play";
import { IconSettings } from "./component/Icons/Settings";

export default function Home() {
	const { gameOn, ownerTime, inviteTime, turn, handleTurn } = useMovement();

	return (
		<main className="main">
			<ComboNumbers
				disabled={gameOn && turn === false}
				onClick={() => handleTurn("OWNER")}
				textInverse
				{...ownerTime}
			/>

			<section>
				{gameOn ? <IconPlay /> : <IconStop />}
				<IconSettings />
			</section>

			<ComboNumbers
				disabled={gameOn && turn === true}
				onClick={() => handleTurn("VISIT")}
				{...inviteTime}
			/>
		</main>
	);
}
