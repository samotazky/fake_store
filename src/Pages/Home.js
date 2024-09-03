import "./Home.css"
import ProductList from "../Components/ProductList"

const Home = ({selectedCategory}) => {
    return <div className="home-page">
        <ProductList selectedCategory={selectedCategory}/>
    </div>
}

export default Home
