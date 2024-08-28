import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ id, title, price, description, category, image }) => {
  return (
    <Link to={`/product/${id}`} className="product">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <p className="product-info">{description}</p>
      <p>{category}</p>
      <h4>{title}</h4>
      <span>{price}€</span>
      <div className="buttons">
        <div className="to-cart">
          <button className="btn-to-cart">+</button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
