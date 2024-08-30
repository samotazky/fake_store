import { Routes, Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import Home from "./Pages/Home";
import Header from './Components/Header';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
