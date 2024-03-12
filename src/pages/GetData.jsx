import { useEffect, useState } from "react"

export default function GetData() {
  const [numbersList, setNumbersList] = useState(null)
  // const [x, setX] = useState(0) 

  useEffect(() => {
    fetch("api/numbers")
    .then(res => res.json())
    .then(result => setNumbersList(result))
  }, [])

  // function changeX() {
  //   setX(x + 1)
  //   console.log("X = ", x);
  // }

  return <>
    <h1>Get data</h1>
    {numbersList ? 
      numbersList.map((item, index) => <p key={item.id}><strong>{index}.</strong> {item.number}</p>) 
      : <h3>Loading data...</h3>
    }
    {/* <button onClick={changeX}>Change X = {x}</button> */}
   </>
}