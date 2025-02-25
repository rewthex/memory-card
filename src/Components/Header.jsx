import '../Styles/Header.css';

export default function Header({ currentScore, highScore }) {
	return (
		<div className='header'>
			<div className='header-left'>
				<h1>Pokémon Memory Game</h1>
				<span>Don't click the same Pokémon twice!</span>
			</div>
			<div className='header-right'>
				<p>Current score: {currentScore}</p>
				<p>High score: {highScore}</p>
			</div>
		</div>
	);
}
