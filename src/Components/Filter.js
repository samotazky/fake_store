import "./Filter.css"
import { useCart } from "../Context/CartContext"
import { useState } from "react"
import { FaFilterCircleXmark, FaFilter } from "react-icons/fa6"

const Filter = ({ onFilter }) => {
    const [filterVisible, setFilterVisible] = useState(true)
    const { categories } = useCart()

    const toggleFilterVisibility = () => {
        setFilterVisible(prevVisibility => !prevVisibility)
    }

    return <div className="filter">
        <button className="btn-filter" onClick={toggleFilterVisibility}><FaFilter /></button>
        {filterVisible && (
            <ul className="filter-list">
                {categories.map((oneCategory, index) => (
                    <li key={index}>
                        <button className="btn-categories" onClick={() => onFilter(oneCategory)}>{oneCategory}</button>
                    </li>
                ))}
                <li><button className="btn-filter-close" onClick={() => onFilter(null)}><FaFilterCircleXmark /></button></li>
            </ul>
        )}
    </div>
}

export default Filter
