import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Shop from "./pages/Shop";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<Shop />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
