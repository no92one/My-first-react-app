import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export default function useContext2() {
  const { number, setNumber } = useContext(GlobalContext)

  return <>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number - 5)}>Ta bort 5</button>
  </>
}