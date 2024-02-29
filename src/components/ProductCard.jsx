import "../styles/ProductCard.css"

export default function ProductCard(props) {
  const {name, price, quantity} = props.product

  return <>
    <li key={name}>Product: {name}
      <br /> Pris: {price}
      <br /> Antal: {quantity}
    </li>
  </>
} 

