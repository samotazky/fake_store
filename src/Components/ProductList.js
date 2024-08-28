import Product from './Product'; // Uistite sa, že cesta je správna
import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

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
        />
      ))}
    </section>
  );
};

export default ProductList;
