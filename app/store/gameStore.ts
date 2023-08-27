import { create } from "zustand";

interface IGameStore {
	second: number;
	minute: number;
	hour: number;
}

interface IClockStore {
	gameRunning: boolean;
	timeRunning: boolean;
	stateConfig: Function;
	timeToPlay: IGameStore;
}

interface IConfigGame {
	timeGame?: boolean;
	timeRunning?: boolean;
}

export const useClockStore = create<IClockStore>((set) => ({
	gameRunning: false,
	timeRunning: false,
	stateConfig: (info: IConfigGame) => {
		if (info.timeGame !== undefined && info.timeRunning !== undefined) {
			return set({ gameRunning: info.timeGame, timeRunning: info.timeRunning });
		}

		if (info.timeRunning !== undefined) {
			return set({ timeRunning: info.timeRunning });
		}

		if (info.timeGame !== undefined) {
			return set({ gameRunning: info.timeGame });
		}

		console.log("NO");
	},
	timeToPlay: {
		hour: 0,
		minute: 15,
		second: 0,
	},
	stageTime: (info: IGameStore) => set({ timeToPlay: info }),
}));
