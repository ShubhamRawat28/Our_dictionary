import { Box, Card, CardContent} from "@mui/material";
import React, {useState} from "react";

const Synoanto = (props) => {

	const extractData = () => {
		let synonymsArray = [];
		let antonymsArray = [];
		let examplesArray = [];
	
		meanings.forEach(meaning => {
			// Add synonyms
			if (meaning.synonyms && meaning.synonyms.length > 0) {
				synonymsArray = [...synonymsArray, ...meaning.synonyms];
			}
	
			// Add antonyms
			if (meaning.antonyms && meaning.antonyms.length > 0) {
				antonymsArray = [...antonymsArray, ...meaning.antonyms];
			}
	
			// Add examples from definitions
			meaning.definitions.forEach(def => {
				if (def.example) {
					examplesArray.push(def.example);
				}
			});
		});
	
		return {
			synonyms: synonymsArray,
			antonyms: antonymsArray,
			examples: examplesArray
		};
	};	

	const [meanings, setMeanings] = useState(props.data);
	const { synonyms, antonyms, examples } = extractData();

	return (
		<Box>
			<Card>
				<CardContent>
					<h2>Dictionary Info</h2>
					<h3>Synonyms</h3>
					<ul>
						{synonyms.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<h3>Antonyms</h3>
					<ul>
						{antonyms.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Synoanto;
