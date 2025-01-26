import Header from './Header';
import CardContainer from './CardContainer';
import { useState } from 'react';
import { shuffle } from '../helpers';

export default function PokemonGame({ pokemonObjects }) {
	const [pokemonArray, setPokemonArray] = useState(shuffle(pokemonObjects))

	const handleShuffle = () => {
		setPokemonArray(shuffle(pokemonArray))
	}

	return (
		<div className='game-container'>
			<Header />
			<CardContainer pokemonArray={pokemonArray} />
			<button onClick={handleShuffle}>Shuffle</button>
		</div>
	);
}
