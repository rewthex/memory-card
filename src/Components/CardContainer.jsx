import '../Styles/CardContainer.css'
import Card from "./Card"

export default function CardContainer({pokemonObjects}) {
  
  return (
    <div className="card-container">
      {pokemonObjects.map(pokemon => (
        <Card key={pokemon.name} name={pokemon.name} sprite={pokemon.sprite} />
      ))}
    </div>
  )
}