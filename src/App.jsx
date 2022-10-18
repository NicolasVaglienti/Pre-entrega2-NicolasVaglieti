import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./pages/ProductDetailContainer/ProductDetailContainer";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer  greeting="hello"/>} />
        <Route path="/product/:id" element={<ProductDetailContainer />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
