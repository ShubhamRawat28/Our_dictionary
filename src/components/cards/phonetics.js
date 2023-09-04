import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import { VolumeUp as VolumeUpIcon } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const Phonetics = ({ data }) => {
	const [audioSources, setAudioSources] = useState([]);
	const [playingIndex, setPlayingIndex] = useState(null);

	useEffect(() => {
		setAudioSources(data.map((item) => new Audio(item.audio)));
	}, [data]);

	const playSound = (index) => {
		if (playingIndex !== null) {
			audioSources[playingIndex].pause();
			audioSources[playingIndex].currentTime = 0;
		}

		audioSources[index].play();
		setPlayingIndex(index);

		audioSources[index].onended = () => {
			setPlayingIndex(null);
		};
	};

	return (
		<Box>
			<Card>
				<CardContent>
					<Typography>Meanings</Typography>
					{data.map((item, index) => (
						<React.Fragment key={index}>
							{item?.text && <Typography>{item.text}</Typography>}
							{item?.audio && audioSources[index] && (
								<IconButton onClick={() => playSound(index)}>
									<VolumeUpIcon
										color={playingIndex === index ? "primary" : "action"}
									/>
								</IconButton>
							)}
						</React.Fragment>
					))}
				</CardContent>
			</Card>
		</Box>
	);
};

export default Phonetics;
