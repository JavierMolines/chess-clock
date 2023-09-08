import { useEffect, useState } from "react";
import { useClockStore } from "@/app/store/gameStore";

const useMovement = () => {
	const velocity = 1000;

	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [turn, setTurn] = useState<any>(null);
	const { gameRunning, timeRunning, timeToPlay, stateConfig } = useClockStore();
	const [ownerTime, setOwnerTime] = useState(timeToPlay);
	const [inviteTime, setInviteTime] = useState(timeToPlay);

	const reduceTimer = (currentPlayer: boolean) => {
		const isValidTime = gameRunning && timeRunning;
		if (!isValidTime) return;

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
			stateConfig({
				timeGame: false,
				timeRunning: false,
			});
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

	const handlerGameFlow = () => {
		if (!gameRunning) return;
		stateConfig({
			timeRunning: !timeRunning,
		});
	};

	const resetGame = () => {
		stateConfig({
			timeGame: false,
			timeRunning: false,
		});
		setTurn(null);
		setOwnerTime(timeToPlay);
		setInviteTime(timeToPlay);
	};

	const handleTurn = (flow: "OWNER" | "VISIT") => {
		if (!gameRunning) {
			stateConfig({
				timeGame: true,
				timeRunning: true,
			});
		}
		const initTurn = flow === "OWNER";
		setTurn(!initTurn);
		window.navigator.vibrate(100);
	};

	useEffect(() => {
		if (gameRunning) {
			const idTimer = setTimeout(() => reduceTimer(turn), velocity);
			return () => {
				clearTimeout(idTimer);
			};
		}
	}, [ownerTime, inviteTime, turn, timeRunning]);

	useEffect(() => {
		setOwnerTime(timeToPlay);
		setInviteTime(timeToPlay);
	}, [timeToPlay]);

	return {
		gameRunning,
		turn,
		ownerTime,
		inviteTime,
		timeRunning,
		handleTurn,
		handlerGameFlow,
		resetGame,
	};
};

export { useMovement };
