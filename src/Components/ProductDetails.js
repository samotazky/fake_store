import "./ProductDetails.css"

const ProductDetails = ({ id, title, price, description, category, image, onAddToCart }) => {

    return <div key={id} className="details">
        <img className="details-img" src={image} alt={title} />
        <div className="details-text">
            <h1 className="details-title">{title}</h1>
            <p className="details-category">{category}</p>
            <p>{description}</p>
            <div className="details-price-btn">
                <p className="details-price">{price}€</p>
                <button className="btn-details-to-cart" onClick={onAddToCart}>Add To Cart</button>
            </div>
        </div>
    </div>
}

export default ProductDetails
