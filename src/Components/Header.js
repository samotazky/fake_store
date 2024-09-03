import "./Header.css"
import Cart from "./Cart"
import Filter from "./Filter"

const Header = ({ onFilter }) => {

    return <header>
        <h1>fake store</h1>
        <Filter onFilter={onFilter}/>
        <Cart />
    </header>
}

export default Header
