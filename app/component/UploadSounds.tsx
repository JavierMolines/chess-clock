export const UploadsSounds = () => {
	return (
		<>
			{/* rome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<audio id="buttonAudioOne">
				<source src="/pressButton.mp3" type="audio/mpeg" />
			</audio>

			{/* rome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<audio id="buttonAudioTwo">
				<source src="/pressButton.mp3" type="audio/mpeg" />
			</audio>
		</>
	);
};
