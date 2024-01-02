// import { useState } from 'react'
import './index.css'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/layout/layout";

function App() {
    return (
     <div>
         <Routes>
             <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="product/:id/:name" element={<ProductPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout-success" element={<CheckoutSuccessPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
             </Route>
        </Routes>
    </div>
  );
}

export default App;
