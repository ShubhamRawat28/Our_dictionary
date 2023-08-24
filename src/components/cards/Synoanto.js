import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Synoanto = (props) => {
	const renderList = (items) =>
		items.map((item, index) => <li key={index}>{item}</li>);
	return (
		<Box>
			<Card>
				<CardContent>
					<h2>Dictionary Info</h2>
					<h3>Synonyms</h3>
					<ul>
						{props.data[0].meanings.map((meaning) => renderList(meaning.synonyms))}
					</ul>
					<h3>Antonyms</h3>
					<ul>
						{props.data[0].meanings.map((meaning) => renderList(meaning.antonyms))}
					</ul>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Synoanto;
