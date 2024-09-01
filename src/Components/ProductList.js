import "./ProductList.css"
import ProductPreview from "./ProductPreview"
import { useCart } from "../Context/CartContext"

const ProductList = () => {
  const { addToCart, products } = useCart()

  return (
    <section className="products-container">
      {products.map(product => (
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
    </section>
  );
};

export default ProductList;
