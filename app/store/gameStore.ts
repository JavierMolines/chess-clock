import { create } from "zustand";
import type {
	IClockStore,
	IConfigGame,
	IGameStore,
} from "../types/gameStore.type";

export const useClockStore = create<IClockStore>((set) => ({
	gameRunning: false,
	timeRunning: false,
	endGame: false,
	timeToPlay: {
		hour: 0,
		minute: 15,
		second: 0,
		milSecond: 0,
	},
	setConfig: (info: IConfigGame) => {
		if (info.timeGame !== undefined && info.timeRunning !== undefined) {
			return set({ gameRunning: info.timeGame, timeRunning: info.timeRunning });
		}

		if (info.timeRunning !== undefined) {
			return set({ timeRunning: info.timeRunning });
		}

		if (info.timeGame !== undefined) {
			return set({ gameRunning: info.timeGame });
		}
	},
	setTime: (info: IGameStore) => set({ timeToPlay: info }),
	setEndGame: (info: boolean) => set({ endGame: info }),
}));
