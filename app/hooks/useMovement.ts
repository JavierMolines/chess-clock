import { useClockStore } from "@/app/store/gameStore";
import { useEffect, useState } from "react";
import { getTimingPlay } from "../utils/storage";

const useMovement = () => {
	const {
		gameRunning,
		timeRunning,
		timeToPlay,
		setConfig,
		endGame,
		setEndGame,
		setTime,
	} = useClockStore();

	const velocity = 100;
	const [turn, setTurn] = useState<boolean | null>(null);
	const [ownerTime, setOwnerTime] = useState(timeToPlay);
	const [inviteTime, setInviteTime] = useState(timeToPlay);

	const reduceTimer = (currentPlayer: boolean) => {
		const isValidTime = gameRunning && timeRunning;
		if (!isValidTime) return;

		const assignNewTime = currentPlayer ? setOwnerTime : setInviteTime;
		const { milSecond, second, minute, hour } = currentPlayer
			? ownerTime
			: inviteTime;

		const newMilSecond = milSecond - 100;
		const newSecond = second - 1;
		const newMinute = minute - 1;
		const newHour = hour - 1;

		// END CLOCK
		if (newSecond < 0 && newMinute < 0 && newHour < 0) {
			setConfig({
				timeGame: false,
				timeRunning: false,
			});
			assignNewTime({
				hour: 0,
				minute: 0,
				second: 0,
				milSecond: 0,
			});
			setEndGame(true);
			window.navigator.vibrate(2000);
			return;
		}

		// HAVE MILSECOND
		if (newMilSecond > 0) {
			assignNewTime({
				hour,
				minute,
				second,
				milSecond: newMilSecond,
			});
			return;
		}

		// HAVE SECONDS
		if (newSecond >= 0) {
			assignNewTime({
				hour,
				minute,
				second: newSecond,
				milSecond: 1000,
			});
			return;
		}

		// HAVE MINUTES
		if (minute > 0) {
			assignNewTime({
				hour,
				minute: newMinute,
				second: 59,
				milSecond: 1000,
			});
			return;
		}

		// HAVE HOURS
		if (hour > 0) {
			assignNewTime({
				hour: newHour,
				minute: 59,
				second: 59,
				milSecond: 1000,
			});
			return;
		}

		// NOT HAVE SECONDS BUT HAVE MINUTES
		if (newSecond <= 0 && newMinute > 0) {
			assignNewTime({
				hour,
				minute: newMinute,
				second: 59,
				milSecond: 1000,
			});
			return;
		}

		// NOT HAVE SECONDS AND NOT HAVE MINUTES BUT HAVE HOURS
		if (newSecond <= 0 && newMinute <= 0 && newHour > 0) {
			assignNewTime({
				hour: newHour,
				minute: 59,
				second: 59,
				milSecond: 1000,
			});
			return;
		}
	};

	const handlerGameFlow = () => {
		if (!gameRunning) return;
		setConfig({
			timeRunning: !timeRunning,
		});
	};

	const resetGame = () => {
		setConfig({
			timeGame: false,
			timeRunning: false,
		});
		setTurn(null);
		setEndGame(false);
		setOwnerTime(timeToPlay);
		setInviteTime(timeToPlay);
	};

	const handleTurn = (flow: "OWNER" | "VISIT") => {
		if (!gameRunning) {
			setConfig({
				timeGame: true,
				timeRunning: true,
			});
		}
		const initTurn = flow === "OWNER";
		setTurn(!initTurn);
		window.navigator.vibrate(100);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		try {
			const storageTiming = JSON.parse(getTimingPlay());
			setTime(storageTiming);
		} catch {}
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (gameRunning && turn !== null) {
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
		endGame,
		handleTurn,
		handlerGameFlow,
		resetGame,
	};
};

export { useMovement };
