import React from 'react';
import styled from '@emotion/styled';

const PhraseContainer = styled.div`
	padding: 3rem;
	border-radius: 0.5rem;
	background-color: #fff;
	max-width: 800px;
	margin-top: 15rem;

	h1 {
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		position: relative;
		padding-left: 4rem;

		&::before {
			content: open-quote;
			font-size: 10rem;
			color: black;
			position: absolute;
			left: -1rem;
			top: -2rem;
		}
	}
	p {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 1.4rem;
		font-weight: bold;
		text-align: right;
		color: #0f574e;
		margin-top: 2rem;
	}
`;

const Phrase = ({ phrase }) => {
	return (
		<PhraseContainer>
			<h1> {phrase.quote} </h1>
			<p>{phrase.author}</p>
		</PhraseContainer>
	);
};

export default Phrase;
