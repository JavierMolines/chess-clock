import { useEffect, useState } from "react";

const useMovement = () => {
	const velocity = 1000;
	const standard = {
		second: 0,
		minute: 10,
		hour: 0,
	};

	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [turn, setTurn] = useState<any>(null);
	const [gameOn, setGameOn] = useState(false);
	const [gameStop, setGameStop] = useState(false);
	const [ownerTime, setOwnerTime] = useState(standard);
	const [inviteTime, setInviteTime] = useState(standard);

	const reduceTimer = (currentPlayer: boolean, initGame: boolean) => {
		if (gameStop || (initGame === false && gameOn === false)) return;

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
		const initTurn = flow === "OWNER";
		setTurn(!initTurn);
		window.navigator.vibrate(100);
	};

	const handlerGameFlow = () => {
		if (gameStop === false) {
			setGameStop(true);
			return;
		}

		setGameStop(false);
	};

	const resetGame = () => {
		if (!gameStop || gameOn) return;

		setGameOn(false);
		setGameStop(false);
		setOwnerTime(standard);
		setInviteTime(standard);
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
	}, [ownerTime, inviteTime, turn, gameStop]);

	return {
		gameOn,
		turn,
		ownerTime,
		inviteTime,
		gameStop,
		handleTurn,
		handlerGameFlow,
		resetGame,
	};
};

export { useMovement };
