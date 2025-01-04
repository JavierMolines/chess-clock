import type { IGameStore } from "../types/gameStore.type";

const ID_TIME_PLAY = "timeToPlay";

const setTimingPlay = (time: IGameStore) => {
	localStorage.setItem(ID_TIME_PLAY, JSON.stringify(time));
};

const getTimingPlay = () => {
	return localStorage.getItem(ID_TIME_PLAY) ?? "";
};

export { setTimingPlay, getTimingPlay };
