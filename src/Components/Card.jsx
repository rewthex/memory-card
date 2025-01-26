export default function Card({name, sprite}) {

  return (
    <div className="card">
      <img src={sprite} alt={name} />
      <h1>{name}</h1>
    </div>
  )
}