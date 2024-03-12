import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../GlobalContext.jsx"

export default function MyNav() {
  const { number } = useContext(GlobalContext)


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
      <Link to={"/getData"}>Hämta data</Link> |&nbsp;
      <Link to={"/myJsonServer"}>Json-server data</Link> |&nbsp;
      <Link to={"/"}>Antal noticer - {number}</Link> |&nbsp;
      <Link to={"/cssNesting"}>Css Nesting</Link> |&nbsp;
    </nav>
  </>
} 
