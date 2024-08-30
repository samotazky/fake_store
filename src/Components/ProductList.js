import Product from "./Product"
import { useState, useEffect } from "react"
import { useCart } from "../Context/CartContext"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <section className="products">
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          description={product.description}
          title={product.title}
          price={product.price}
          category={product.category}
          onAddToCart={() => addToCart(product)} // Predaj addToCart funkciu do Product komponentu
        />
      ))}
    </section>
  );
};

export default ProductList;
