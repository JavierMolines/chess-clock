import { create } from "zustand";

interface IGameStore {
	second: number;
	minute: number;
	hour: number;
}

interface IClockStore {
	timeToPlay: IGameStore;
	endGame: boolean;
	gameRunning: boolean;
	timeRunning: boolean;
	setConfig: Function;
	setTime: Function;
	setEndGame: Function;
}

interface IConfigGame {
	timeGame?: boolean;
	timeRunning?: boolean;
}

export const useClockStore = create<IClockStore>((set) => ({
	gameRunning: false,
	timeRunning: false,
	endGame: false,
	timeToPlay: {
		hour: 0,
		minute: 15,
		second: 0,
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
