import { useState, useEffect } from 'react';
import './App.css';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const STARTING_POKEMON = Math.floor(Math.random() * 141) + 1;
const pokemon_array = Array.from(
	{ length: 10 },
	(_, i) => STARTING_POKEMON + i
);

function App() {
	const pokemon = useData(pokemon_array)
  
  const filteredPokemon = pokemon ? pokemon.map((pokemon) => ({
		name: pokemon.name,
		sprite: pokemon.sprites.other.dream_world.front_default,
	}))
  : [];

	return (
    <div>
      <h1>Pokémon</h1>
      {filteredPokemon.length > 0 ? (
        filteredPokemon.map((p, index) => (
          <div key={index}>
            <h2>{p.name}</h2>
            <img src={p.sprite} alt={p.name} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function useData(ids) {
	const [data, setData] = useState(null);

	useEffect(() => {
		let ignore = false;

		const fetchPromises = ids.map((id) =>
			fetch(`${POKEMON_API_URL}${id}`).then((response) => response.json())
		);

		Promise.all(fetchPromises).then((results) => {
			if (!ignore) {
				setData(results);
			}
		});

		return () => {
			ignore = true;
		};
	}, [ids]);

	return data;
}

export default App;
