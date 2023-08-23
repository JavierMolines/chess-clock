"use client";

import "./styles/page.css";
import { useEffect, useState } from "react";
import { IconPlay } from "./component/IconPlay";
import { ComboNumbers } from "./component/ComboNumbers";
import { ClockProps } from "./types/types";
import { UploadsSounds } from "./component/UploadSounds";

export default function Home() {
	const velocity = 1000;
	const standard = {
		second: 0,
		minute: 5,
		hour: 0,
	};

	const [turn, setTurn] = useState(false);
	const [gameOn, setGameOn] = useState(false);
	const [ownerTime, setOwnerTime] = useState<ClockProps>(standard);
	const [inviteTime, setInviteTime] = useState<ClockProps>(standard);

	const reduceTimer = (currentPlayer: boolean, initGame: boolean) => {
		if (initGame === false && gameOn === false) return;

		const assignNewTime = currentPlayer ? setOwnerTime : setInviteTime;
		const { second, minute, hour } = currentPlayer ? ownerTime : inviteTime;
		const newSecond = second - 1;
		const newMinute = minute - 1;
		const newHour = hour - 1;

		// HAVE SECONDS
		if (newSecond > 0) {
			assignNewTime({
				hour,
				minute,
				second: newSecond,
			});
			return;
		}

		// HAVE MINUTES
		if (minute > 0) {
			assignNewTime({
				hour,
				minute: newMinute,
				second: 59,
			});
			return;
		}

		// HAVE HOURS
		if (hour > 0) {
			assignNewTime({
				hour: newHour,
				minute: 59,
				second: 59,
			});
			return;
		}

		// END CLOCK
		if (newSecond <= 0 && newMinute <= 0 && newHour <= 0) {
			setGameOn(false);
			assignNewTime({
				hour: 0,
				minute: 0,
				second: 0,
			});
			return;
		}

		// NOT HAVE SECONDS BUT HAVE MINUTES
		if (newSecond <= 0 && newMinute > 0) {
			assignNewTime({
				hour,
				minute: newMinute,
				second: 59,
			});
			return;
		}

		// NOT HAVE SECONDS AND NOT HAVE MINUTES BUT HAVE HOURS
		if (newSecond <= 0 && newMinute <= 0 && newHour > 0) {
			assignNewTime({
				hour: newHour,
				minute: 59,
				second: 59,
			});
			return;
		}
	};

	const handleTurn = (flow: "OWNER" | "VISIT") => {
		if (!gameOn) {
			setGameOn(true);
		}
		const initTurn = flow !== "OWNER";
		setTurn(initTurn);
		reduceTimer(!turn, true);
		const nameButton = turn ? "buttonAudioOne" : "buttonAudioTwo";
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		const media: any = document.getElementById(nameButton);
		media.play();
	};

	useEffect(() => {
		if (gameOn) {
			const idTimer = setTimeout(() => {
				reduceTimer(turn, false);
			}, velocity);

			return () => {
				clearTimeout(idTimer);
			};
		}
	}, [ownerTime, inviteTime]);

	return (
		<main className="main">
			<ComboNumbers
				onClick={() => handleTurn("OWNER")}
				textInverse
				{...ownerTime}
			/>

			<UploadsSounds />

			<section>
				<button type="button">
					<IconPlay />
				</button>
			</section>

			<ComboNumbers onClick={() => handleTurn("VISIT")} {...inviteTime} />
		</main>
	);
}
