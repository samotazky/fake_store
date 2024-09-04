import "./Filter.css"
import { useCart } from "../Context/CartContext"
import { FaFilterCircleXmark } from "react-icons/fa6"
const Filter = ({ onFilter }) => {

    const { categories } = useCart()

    return <div className="filter">
        {categories.map((oneCategory, index) => (
            <button className="btn-filter" key={index} onClick={() => onFilter(oneCategory)}>{oneCategory}</button>
        ))}
        <button className="btn-filter-close" onClick={() => onFilter(null)}><FaFilterCircleXmark /></button>
    </div>
}

export default Filter
