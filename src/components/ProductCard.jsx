import React, { useEffect, useState } from "react";
import api from "../api/axios.js";

function ProductCard({ productId, productName, description, price, image }) {
         
                   const [isAddedWishlist, setIsAddedWishlist] = useState(false);
                  //  const [Wishlists,  setWishlists] = useState([]);
  
              const addToWishlist = async () => {
                try {
                  await api.post("/wishlist-add", {
                    product_id: productId,
                  });
                  setIsAddedWishlist(true);

                  alert("Item has been added to wishlist !!");
                } catch (error) {
                  console.error(error);
                  alert("Failed to add to wishlist");
                }
              };

              const removeFromWishlist = async () => {
                try {
                  await api.post("/wishlist/remove", {
                    product_id: productId,
                  });
                  setIsAddedWishlist(false);

                  alert("Item has been removed from wishlist !!");
                } catch (error) {
                  console.error(error);
                  alert("Failed to remove from wishlist");
                }
              };

         useEffect(() => {
           const fetchWishlist = async () => {
             const res = await api.get("/wishlist");
             const ids = res.data.data.wishlists.map((w) => w.product_id);
             setIsAddedWishlist(ids.includes(productId));
           };

           fetchWishlist();
         }, [productId]);


  return (
    <div className="w-65 bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Product Image */}
      <img
        src={
          image
            ? image
            : "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        }
        alt="Product"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <div className="w-50 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
          <button
            onClick={isAddedWishlist ? removeFromWishlist : addToWishlist}
          >
            <i
              className={`fa-heart fa-lg ${
                isAddedWishlist
                  ? "fa-solid text-red-500"
                  : "fa-regular text-gray-400"
              }`}
            ></i>
          </button>
        </div>
        <div className="h-25">
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-blue-600">₹{price}</span>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
