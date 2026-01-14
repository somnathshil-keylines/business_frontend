import { useState } from 'react'
import viteLogo from '/vite.svg'

// about route details
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

import './App.css'

// pages
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import Home from './pages/Home'
import Orders from './pages/Orders'
import ProductDetails from './pages/ProductDetails'
import SellerAddProduct from './pages/SellerAddProduct'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import CheckoutLayout from './layouts/CheckoutLayout';
import CheckoutAddress from './pages/CheckoutAddress';
import CheckoutPayment from './pages/CheckoutPayment';
import Profile from "./pages/Profile";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* PROTECTED ROUTES */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/seller/add-product"
          element={
            <PrivateRoute>
              <SellerAddProduct />
            </PrivateRoute>
          }
        />
        {/*  CHECKOUT (ONLY HERE CheckoutProvider is active) */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutLayout />
            </PrivateRoute>
          }
        >
          <Route path="address" element={<CheckoutAddress />} />
          <Route path="payment" element={<CheckoutPayment />} />
        </Route>


        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App
