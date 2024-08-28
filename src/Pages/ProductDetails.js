import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const ProductDetails = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return <div>
    <h1>{product.title}</h1>
    <img src={product.image} alt="" />
    <p>{product.description}</p>
    <span>{product.price}</span>
    <span>{product.category}</span>
  </div>
}

export default ProductDetails
