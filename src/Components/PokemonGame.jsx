import Header from './Header';
import CardContainer from './CardContainer';

export default function PokemonGame({ pokemonObjects }) {
	return (
		<div className='game-container'>
			<Header />
			<CardContainer pokemonObjects={pokemonObjects} />
		</div>
	);
}
