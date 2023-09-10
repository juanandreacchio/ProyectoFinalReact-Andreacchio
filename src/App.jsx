import { createContext } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { ModeProvider } from "./context/ModeContext";

export const MiContext = createContext();

function App() {
  return (
    <>
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
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ModeProvider>
    </>
  );
}

export default App;
