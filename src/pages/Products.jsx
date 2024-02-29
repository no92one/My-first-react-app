export default function Products() {
  const products = [
    {
      name: "Delicatoboll",
      price: 10,
      quantity: 500 
    },
    {
      name: "Våffla med sylt",
      price: 45,
      quantity: 44 
    },
    {
      name: "Kladekauga",
      price: 150,
      quantity: 3
    },
    {
      name: "Övergiven Semla",
      price: -10,
      quantity: 10000 
    }
  ]

  return <>
    {products.length < 1 ?
      <h1>Slut sålt, kom tillbaka imorgon!</h1> :
      <ul>
      {products.map((product) => <li key={product.name}>Product: {product.name}
        <br /> Pris: {product.price}
        <br /> Antal: {product.quantity}</li>)}
    </ul>}
  </>
} 