import { useState } from "react"

export default function MyUseState() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState("Hej på dej!")

  setInterval(() => setCount(count + 1), 500)

  function checkTime() {
    if (count >= 5) {
      setText("De e slö, ingen TACOS för daj!")
    } else {
      setText("Toco Tisdag e najs!")
    }
  }

  return <>
    <h1>{text}</h1>

    <button onClick={() => checkTime()}>TACO TACO TACO</button>

    <h2>Så här många sekunder har gått nu: {count}</h2>


  </>
}

