import Product from "./Product"
import { useCart } from "../Context/CartContext"

const ProductList = () => {
  const { addToCart, products } = useCart()

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
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </section>
  );
};

export default ProductList;
