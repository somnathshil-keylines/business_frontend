import React, { useEffect, useState } from "react";
import api from "../api/axios.js";

function ProductCard({ productId, productName, description, price, image }) {
         
                   const [isAddedWishlist, setIsAddedWishlist] = useState(false);
                   const [isAddedCart, setIsAddedCart] = useState(false);
                  const [quantity, setQuantity] = useState(1);
  
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


         const addToCart = async () => {
           try {
             await api.post("/cart-add", {
               product_id: productId,
               quantity: quantity,
             });
             setIsAddedCart(true);

             alert("Item has been added to cart !!");
           } catch (error) {
             console.error(error);
             alert("Failed to add to cart");
           }
         };

         const removeFromCart = async () => {
           try {
             await api.post("/cart/delete", {
               product_id: productId,
             });
             setIsAddedCart(false);

             alert("Item has been removed from cart !!");
           } catch (error) {
             console.error(error);
             alert("Failed to remove from cart");
           }
         };

          useEffect(() => {
           const fetchCartList = async () => {
             const res = await api.get("/cart");
             const ids = res.data.carts.map((c) => c.product_id);
             setIsAddedCart(ids.includes(productId));
               res.data.carts.map((c)=>{
                 if(c.product_id == productId){
                   setQuantity(c.quantity);
                 }
               });
           };

           fetchCartList();
         }, [productId]);

         const increaseQty = () => {
           setQuantity((q) => q + 1);
         };

         const decreaseQty = () => {
           setQuantity((q) => (q > 1 ? q - 1 : 1));
         };


  return (
    <div className="w-70 bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
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

          {/* Bottom Section */}
          <div className="mt-4">
            {/* Price + Quantity */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-bold text-blue-600 p-4">
                ₹{price}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseQty}
                  className="w-8 h-8 flex items-center justify-center border rounded-md text-lg font-semibold hover:bg-gray-100"
                >
                  −
                </button>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  className="w-12 text-center border rounded-md py-1 focus:outline-none"
                />

                <button
                  onClick={increaseQty}
                  className="w-8 h-8 flex items-center justify-center border rounded-md text-lg font-semibold hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-semibold transition"
              onClick={isAddedCart ? removeFromCart : addToCart}
              
            >
              {isAddedCart ? 
              "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
