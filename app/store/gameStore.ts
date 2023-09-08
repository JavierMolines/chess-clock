import { create } from "zustand";

interface IGameStore {
	second: number;
	minute: number;
	hour: number;
}

interface IClockStore {
	timeToPlay: IGameStore;
	gameRunning: boolean;
	timeRunning: boolean;
	stateConfig: Function;
	stageTime: Function;
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
	},
	timeToPlay: {
		hour: 0,
		minute: 15,
		second: 0,
	},
	stageTime: (info: IGameStore) => set({ timeToPlay: info }),
}));
