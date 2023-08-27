import { create } from "zustand";

interface IClockStore {
	gameRunning: boolean;
	timeRunning: boolean;
	stateConfig: Function;
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
}));
