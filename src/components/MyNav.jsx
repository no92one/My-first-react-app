import { Link } from "react-router-dom"

export default function MyNav() {
  return <>
    <nav>
      <Link to={"/"}>Home</Link> |&nbsp;
      <Link to={"/secondPage"}>Andra sidan</Link>
    </nav>
  </>
} 
