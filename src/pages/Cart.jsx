import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import FullPageLoader from "../components/FullPageLoader";
import Error from "../components/Error";
import api from "../api/axios.js";

function Cart() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await api.get("/cart");
        console.log(response.data.carts);
        setTimeout(() => {
          setProducts(response.data.carts);
          setLoading(false);
        }, 500);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <>
        <FullPageLoader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
        {products.map((product) => (
          <ProductCard
            productName={product.name}
            description={product.quantity}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
