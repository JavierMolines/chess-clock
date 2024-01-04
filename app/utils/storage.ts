const ID_TIME_PLAY = "timeToPlay";

const setTimingPlay = (time: any) => {
	localStorage.setItem(ID_TIME_PLAY, JSON.stringify(time));
};

const getTimingPlay = () => {
	return localStorage.getItem(ID_TIME_PLAY) ?? "";
};

export { setTimingPlay, getTimingPlay };
