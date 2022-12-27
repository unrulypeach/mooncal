export default function Day({ date = 'poo', moon = 'nope'}){
  return(
    <div>
      <h1>{date}</h1>
      <span>{moon}</span>
    </div>
  )
}