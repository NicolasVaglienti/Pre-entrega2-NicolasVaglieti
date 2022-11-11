import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./pages/ProductDetailContainer/ProductDetailContainer";
import Checkout from "./pages/Checkout/Checkout";
import Cart from './pages/cart/Cart';
import CartProvider from './providers/cartProvider'

function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer  greeting="hello"/>} />
        <Route path="/category/:id" element={<ItemListContainer  greeting="Products filtered by category" />} />
        <Route path="/product/:id" element={<ProductDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
              path="*"
              element={<h4>Error 404. Contacte al Administrador</h4>}
            />
      </Routes>
        </ CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
