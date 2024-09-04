import "./ProductList.css"
import ProductPreview from "./ProductPreview"
import ScrollToTopBtn from "./ScrollToTopBtn"
import { useCart } from "../Context/CartContext"

const ProductList = ({ selectedCategory }) => {
  const { addToCart, products } = useCart()

  const filteredProducts = selectedCategory 
  ? products.filter(product => product.category === selectedCategory)
  : products

  return <section className="products-container">
      {filteredProducts.map(product => (
        <ProductPreview
          key={product.id}
          id={product.id}
          image={product.image}
          description={product.description}
          title={product.title}
          price={product.price}
          category={product.category}
          onAddToCart={() => addToCart(product)}
        />
      ))}
      <ScrollToTopBtn />
    </section>
  
}

export default ProductList
