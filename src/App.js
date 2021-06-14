import React, { useState, useEffect } from 'react';
import Phrase from './components/Phrase';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	align-items: center;
	margin-top: 5rem;
	padding-top: 5rem;
	flex-direction: column;
`;

const Button = styled.button`
	background: -webkit-linear-gradient(
		top left,
		#007d35 0%,
		#007d35 40%,
		#0f574e 100%
	);
	background-size: 300px;
	border-radius: 2rem;
	font-family: Arial, Helvetica, sans-serif;
	color: #fff;
	margin-top: 3rem;
	padding: 1rem 3rem;
	font-size: 2rem;
	border: 2px solid white;
	transition: background-size 8s ease;

	:hover {
		cursor: pointer;
		background-size: 400px;
	}
`;

function App() {
	const [phrase, getPhrase] = useState({});

	const consultAPI = async () => {
		const api = await fetch(
			'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
		);
		const phrase = await api.json();
		getPhrase(phrase[0]);
	};

	useEffect(() => {
		consultAPI();
	}, []);

	return (
		<Container>
			<Phrase phrase={phrase} />
			<Button onClick={consultAPI}>Get Phrase</Button>
		</Container>
	);
}

export default App;
