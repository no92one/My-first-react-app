import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export default function useContext1() {
  const { number, setNumber } = useContext(GlobalContext)

  return <>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 5)}>Lägg till 5</button>
  </>
}