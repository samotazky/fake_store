import { Routes, Route } from 'react-router-dom';
import ProductsDetails from './Pages/ProductsDetails';
import Home from "./Pages/Home";
import Header from './Components/Header';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
};

export default App;
