import { useState, useMemo, useEffect } from 'react';
import './App.css';
import PokemonGame from './Components/PokemonGame';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  const pokemonIds = useMemo(() => {
    const ids = new Set();
    while (ids.size !== 12) {
        ids.add(Math.floor(Math.random() * 151) + 1);
    }
    return Array.from(ids);
  }, []);

	const pokemonData = useData(pokemonIds);

	const pokemonObjects = useMemo(
    () =>
        pokemonData
            ? pokemonData.map((pokemon) => ({
                  name: pokemon.name,
                  sprite: pokemon.sprites.other['official-artwork'].front_default,
              }))
            : [],
    [pokemonData]
);

	return (
		<>
			{pokemonObjects.length > 0 ? (
				<PokemonGame pokemonObjects={pokemonObjects} />
			) : (
				<p>Loading...</p>
			)}
		</>
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
