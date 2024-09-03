import "./ProductsDetails.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "../Context/CartContext"
import ProductDetails from "../Components/ProductDetails"

const ProductsDetails = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  return <div className="details-page">
    <ProductDetails
      key={product.id}
      id={product.id}
      image={product.image}
      description={product.description}
      title={product.title}
      price={product.price}
      category={product.category}
      onAddToCart={() => addToCart(product)}
       />
  </div>
}

export default ProductsDetails
