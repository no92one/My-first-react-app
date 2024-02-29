import { useState } from "react"

export default function MyUseState2() {
  const [text, setText] = useState("Någon text")

  return <>
    <input type="text" onChange={(event) => setText(event.target.value)} placeholder="Skriv något så ändras texten!"/>
    <p>{text}</p>
  </>
}