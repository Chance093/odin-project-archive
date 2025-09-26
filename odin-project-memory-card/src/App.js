import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import GameWon from './components/GameWon';
import styles from './App.module.css';
import fetchPokemon from './PokeAPI';

function App() {
	const [cards, setCards] = useState([]);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [isGameWon, setIsGameWon] = useState(false);
	const [clickedCards, setClickedCards] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const pokemons = await fetchPokemon();
			setCards(pokemons);
		}
		fetchData();
	}, []);

	useEffect(() => {
		if (score > highScore) setHighScore(score);

		if (score === 12) setIsGameWon(true);
	}, [score, highScore]);

	function shuffle() {
		let currentIndex = cards.length,
			temporaryValue,
			randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = cards[currentIndex];
			cards[currentIndex] = cards[randomIndex];
			cards[randomIndex] = temporaryValue;
		}
		setCards(cards);
	}

	function handleClick(e) {
		if (clickedCards.includes(e.target.alt)) {
			setScore(0);
			setClickedCards([]);
		} else {
			setScore(score + 1);
			setClickedCards([...clickedCards, e.target.alt]);
		}
		shuffle();
	}

	function resetGame() {
		setScore(0);
		setHighScore(0);
		setClickedCards([]);
		setIsGameWon(false);
		shuffle();
	}

	const conditionalRender = isGameWon ? (
		<GameWon resetGame={resetGame} />
	) : (
		<Cards handleClick={handleClick} cards={cards} />
	);

	return (
		<div className={styles.app}>
			<Header score={score} highScore={highScore} />
			{conditionalRender}
		</div>
	);
}

export default App;
