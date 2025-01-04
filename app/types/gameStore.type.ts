export interface IGameStore {
	second: number;
	minute: number;
	hour: number;
	milSecond: number;
}

export interface IClockStore {
	timeToPlay: IGameStore;
	endGame: boolean;
	gameRunning: boolean;
	timeRunning: boolean;
	setConfig: (info: IConfigGame) => void;
	setTime: (info: IGameStore) => void;
	setEndGame: (status: boolean) => void;
}

export interface IConfigGame {
	timeGame?: boolean;
	timeRunning?: boolean;
}
