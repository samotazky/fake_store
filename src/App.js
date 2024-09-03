import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import ProductsDetails from "./Pages/ProductsDetails"
import Home from "./Pages/Home"
import Header from "./Components/Header"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return <div>
      <Header onFilter={setSelectedCategory}/>
      <Routes>
        <Route path="/" element={<Home selectedCategory={selectedCategory}/>} />
        <Route path="/product/:id" element={<ProductsDetails />} />
      </Routes>
    </div>
}

export default App
