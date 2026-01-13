import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import api from "../api/axios";
import FullPageLoader from "../components/FullPageLoader";
import Error from "../components/Error";
import { useApp } from "../context/AppContext";


function Wishlist() {
  const { cart, wishlist, user } = useApp();

  const [wishlists, setWishlists]  = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
      (async()=>{
        try {
            setError(false);
            setLoading(true);
          // const response = wishlist;
          console.log(wishlist);
          setTimeout(() => {
            setWishlists(wishlist);
            setLoading(false);
          }, 500);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
      })()
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

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlists.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              productName={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;
