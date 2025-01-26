import '../Styles/CardContainer.css'
import Card from "./Card"

export default function CardContainer({pokemonArray}) {
  
  return (
    <div className="card-container">
      {pokemonArray.map(pokemon => (
        <Card key={pokemon.name} name={pokemon.name} sprite={pokemon.sprite} />
      ))}
    </div>
  )
}