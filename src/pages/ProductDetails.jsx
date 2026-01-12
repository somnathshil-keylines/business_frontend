import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <img
          src="https://via.placeholder.com/400"
          alt="Product"
          className="rounded shadow"
        />

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold">Product Name</h1>
          <p className="text-gray-500 mt-2">
            Full product description goes here.
          </p>

          <p className="text-xl font-semibold text-blue-600 mt-4">₹999</p>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
