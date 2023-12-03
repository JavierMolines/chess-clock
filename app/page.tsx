"use client";

import { useState } from "react";
import { ComboNumbers } from "./component/ComboNumbers";
import { IconBack } from "./component/Icons/Back";
import { IconClock } from "./component/Icons/Clock";
import { IconPlay } from "./component/Icons/Play";
import { IconStop } from "./component/Icons/Stop";
import { ModalSelection } from "./component/ModalSelection";
import { useMovement } from "./hooks/useMovement";
import "./styles/page.css";

export default function Home() {
	const {
		gameRunning,
		timeRunning,
		ownerTime,
		inviteTime,
		turn,
		endGame,
		handleTurn,
		handlerGameFlow,
		resetGame,
	} = useMovement();

	// MODAL
	const [showModal, setShowModal] = useState(false);
	const handlerStatusModal = () => setShowModal(!showModal);

	// CONDITIONAL RENDERING
	const statusButtonOwner = endGame ? true : gameRunning && turn === false;
	const statusButtonVisit = endGame ? true : gameRunning && turn === true;
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
				<IconClock action={handlerStatusModal} />
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

			{showModal && <ModalSelection callback={handlerStatusModal} />}
		</main>
	);
}
