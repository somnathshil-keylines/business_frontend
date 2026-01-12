import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SellerAddProduct() {
  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Add Product</h1>

        <form className="bg-white shadow rounded p-6 space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Description"
            className="w-full border p-2 rounded"
          ></textarea>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
            Add Product
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default SellerAddProduct;
