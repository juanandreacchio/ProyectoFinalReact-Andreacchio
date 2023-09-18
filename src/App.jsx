import { createContext } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { ModeProvider } from "./context/ModeContext";
import { Cart } from "./components/Cart/Cart"
import { Checkout } from "./components/Checkout/Checkout";
import { Login } from "./components/LogIn/Login";
import { LoginProvider } from "./context/LogInContext";
import { Profile } from "./components/Profile/Profile";

export const MiContext = createContext();

function App() {


  return (
    <>
    <LoginProvider>
      <ModeProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting="Bienvenido/a a TElectronics!" />
                }
              />
              <Route
                path="category/:categoryId"
                element={
                  <ItemListContainer greeting="Productos por categoría" />
                }
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ModeProvider>
      </LoginProvider>
      </>
  );
}

export default App;
