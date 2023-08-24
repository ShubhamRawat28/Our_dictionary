import "./search.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Meaning from "../cards/Meaning";
import Phonetics from "../cards/Phonetics";
import Synoanto from "../cards/Synoanto";
import { Container, Row, Col } from "react-grid-system";

const Search = () => {
	const [inputValue, setInputValue] = useState("");
	const [fetchValue, setFetchValue] = useState(null);
	let values = null;
	const handleInput = () => {
		console.log("clicked");
		fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + inputValue)
			.then((response) => response.json())
			.then(function(data){
				setFetchValue(data);
				console.log(data);
			})
			.catch((err) => console.log(err));
		console.log(values);
	};
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<div className="search">
			<div className="input-wrapper">
				<input
					class="input-box"
					placeholder="Type to search..."
					onChange={handleChange}
				/>
				<button className='search-button' onClick={handleInput}>
					<FaSearch id="search-icon" />
				</button>
			</div>
			{fetchValue == null ? <div className="no-content">
				<h1>Nothing Searched</h1>
			</div> 
			: <div className="content">
				<Container>
					<Row className="temp2">
						<Col sm={12} md={6} lg={4}>
							<Meaning data = {fetchValue[0].meanings}/>
						</Col>
						<Col sm={12} md={6} lg={4}>
							<Phonetics data = {fetchValue[0].phonetics}/>
						</Col>
						<Col sm={12} md={12} lg={4}>
							<synoanto data = {fetchValue[0].meanings}/>
						</Col>
					</Row>
				</Container>
			</div>}
		</div>
	);
};

export default Search;
