import "./Filter.css"
import { useCart } from "../Context/CartContext"
const Filter = ({ onFilter }) => {

    const { categories } = useCart()

    return <div>
        {categories.map((oneCategory, index) => (
            <button key={index} onClick={() => onFilter(oneCategory)}>{oneCategory}</button>
        ))}
        <button onClick={() => onFilter(null)}>Zrušiť</button>
    </div>
}

export default Filter
