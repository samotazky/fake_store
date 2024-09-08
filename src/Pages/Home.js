import "./Home.css"
import ProductList from "../Components/ProductList"
import ImagesSlider from "../Components/ImagesSlider"
const Home = ({ selectedCategory }) => {
    return <div className="home-page">
        <ImagesSlider />
        <ProductList selectedCategory={selectedCategory} />
    </div>
}

export default Home
