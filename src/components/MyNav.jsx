import { Link } from "react-router-dom"

export default function MyNav() {
  return <>
    <nav>
      |&nbsp;
      <Link to={"/"}>Home</Link> |&nbsp;
      <Link to={"/secondPage"}>Andra sidan</Link> |&nbsp;
      <Link to={"/myUseState"}>My use state</Link> |&nbsp;
      <Link to={"/myUseState2"}>Input sida</Link> |&nbsp;
      <Link to={"/products"}>Produkt lista</Link> |&nbsp;
      <Link to={"/useContext1"}>Context 1</Link> |&nbsp;
      <Link to={"/useContext2"}>Context 2</Link> |&nbsp;
    </nav>
  </>
} 
