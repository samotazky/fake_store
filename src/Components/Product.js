import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ id, title, price, description, category, image, onAddToCart  }) => {

  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product-link">
        <div className="img-container">
          <img src={image} alt={title} />
        </div>
        <p className="product-info">{description}</p>
        <p>{category}</p>
        <h4>{title}</h4>
        <span>{price}€</span>
      </Link>
      <div className="buttons">
        <div className="to-cart">
          <button className="btn-to-cart" onClick={onAddToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
