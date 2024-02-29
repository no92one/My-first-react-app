import ProductCard from "./ProductCard.jsx"
import "../styles/ProductsList.css"
export default function ProductsList() {

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
    <ul className="products-list">
      {products.map((product) => <ProductCard key={product.name} product={product}/>)}
    </ul>
  </>
}