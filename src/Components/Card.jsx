import '../Styles/Card.css'

export default function Card({name, sprite}) {

  return (
    <div className="card">
      <img src={sprite} alt={name} width="250px"/>
      <h1 className="pokemon-name">{name}</h1>
    </div>
  )
}