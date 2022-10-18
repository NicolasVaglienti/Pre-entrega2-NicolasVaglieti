import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./pages/ProductDetailContainer/ProductDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer  greeting="hello"/>} />
        <Route path="/category/:id" element={<ItemListContainer  greeting="Products filtered by category" />} />
        <Route path="/product/:id" element={<ProductDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
