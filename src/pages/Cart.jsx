import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import FullPageLoader from "../components/FullPageLoader";
import Error from "../components/Error";
import api from "../api/axios.js";
import CartItem from "../components/CartItem.jsx";

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

  const handleRemove = async (productId) => {
      try {
        await api.post("/cart/delete", {
          product_id: productId,
        });

        alert("Item has been removed from cart !!");
            setProducts((prev) =>
              prev.filter((item) => item.product_id !== productId)
            );

      } catch (error) {
        console.error(error);
        alert("Failed to remove from cart");
      }
  };

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
      <div className="w-[80%] mx-auto px-6 py-8">
        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <CartItem
              key={product.product_id}
              productId={product.product_id}
              productName={product.name}
              quantity={product.quantity}
              price={product.price}
              image={product.image}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <div className="mt-6 border rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Total Price</p>
              <p className="text-sm text-gray-500">
                ({products.length} item{products.length > 1 && "s"})
              </p>
            </div>

            <span className="text-lg font-bold text-green-600">
              ₹
              {products.reduce(
                (total, product) =>
                  total + Number(product.price) * product.quantity,
                0
              )}
            </span>
          </div>

          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Order Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
