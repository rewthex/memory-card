import Header from './Header';
import CardContainer from './CardContainer';
import { useState } from 'react';
import { shuffle } from '../helpers';

export default function PokemonGame({ pokemonObjects }) {
	const [pokemonArray, setPokemonArray] = useState(pokemonObjects);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [selectedPokemon, setSelectedPokemon] = useState(new Set());

	const handleCardClick = ({ currentTarget }) => {
		const pokemonClicked = currentTarget.id;
		if (selectedPokemon.has(pokemonClicked)) {
			if (currentScore > highScore) {
				setHighScore(currentScore);
			}
			setCurrentScore(0);
			setSelectedPokemon(new Set());
		} else {
			setCurrentScore(currentScore + 1);
			setSelectedPokemon(
				(prevPokemon) => new Set([...prevPokemon, pokemonClicked])
			);
		}
		setPokemonArray(shuffle(pokemonArray));
	};

	return (
		<div className='game-container'>
			<Header 
				currentScore={currentScore}
				highScore={highScore}
			/>
			<CardContainer
				pokemonArray={pokemonArray}
				handleCardClick={handleCardClick}
			/>
		</div>
	);
}
