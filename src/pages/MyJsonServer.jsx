import { useEffect, useState } from "react"

export default function MyJsonServer() {
  const [textData, setTextData] = useState(null)
  const [inputText, setInputText] = useState("Skriv något...")
  const [goodPost, setGoodPost] = useState(0)


  async function postText() {
    const response = await fetch("api/textData", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "text": inputText
      })
    })

    if (response.ok) {
      alert("Det gick bra!")
      setGoodPost(goodPost + 1)
    } else {
      alert("Det gick åt helvete!")
    }
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("api/textData")
      const result = await response.json()

      setTextData(result)
    } 

    getData()
  }, [goodPost])

  return <>
    <h1>Get data from json-server</h1>
    <input type="text" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
    <button onClick={postText}>Lägg till ny text</button>

    {textData ?
      textData.map(item => <p key={item.id}>{item.text}</p>) :
      <p>Loading data ...</p>
    }
  </>
}