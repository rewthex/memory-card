import '../Styles/Card.css';

export default function Card({ name, sprite, handleCardClick }) {
	return (
		<div className='card' id={name} onClick={handleCardClick}>
			<img src={sprite} alt={name} width='250px' />
			<h1 className='pokemon-name'>{name}</h1>
		</div>
	);
}
