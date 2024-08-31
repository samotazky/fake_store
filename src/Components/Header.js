import "./Header.css"
import Cart from "./Cart"
import { useCart } from "../Context/CartContext"

const Header = () => {
    const { products } = useCart()
    const categories = [...new Set(products.map(product => product.category))]

    return <header>
        <h1>Header</h1>
        {categories.map((category, id) => (
            <button key={id} className="btn-category">{category}</button>
        ))}
        <Cart />
    </header>
}

export default Header
