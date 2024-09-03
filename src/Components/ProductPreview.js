import "./ProductPreview.css"
import { Link } from "react-router-dom"

const ProductPreview = ({ id, title, price, description, category, image, onAddToCart }) => {

  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product-link">
        <div className="img-container">
          <img className="preview-img" src={image} alt={title} />
        </div>

        <p className="product-category">{category}</p>
        <h4>{title}</h4>
        <p className="product-price">{price}€</p>
      </Link>
      <div className="btn-container">
        <div className="to-cart">
          <button className="btn-to-cart" onClick={onAddToCart}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
