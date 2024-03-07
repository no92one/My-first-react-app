import { useEffect, useState } from "react"

export default function GetData() {
  const [numbersList, setNumbersList] = useState(null)
  // const [x, setX] = useState(0) 

  useEffect(() => {
    fetch("/data.json")
    .then(res => res.json())
    .then(result => setNumbersList(result.numbers))
  }, [])

  // function changeX() {
  //   setX(x + 1)
  //   console.log("X = ", x);
  // }

  return <>
    <h1>Get data</h1>
    {numbersList ? 
      numbersList.map((number, index) => <p><strong>{index}.</strong> {number}</p>) 
      : <h3>Loading data...</h3>
    }
    {/* <button onClick={changeX}>Change X = {x}</button> */}
   </>
}