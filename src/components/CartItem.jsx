import React, { useState } from "react";
import api from "../api/axios";

function CartItem({
  productId,
  productName,
  quantity,
  price,
  image,
  onRemove,
}) {
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  const increaseQty = () => {
    setUpdatedQuantity((q) => q + 1);
  };

  const decreaseQty = () => {
    setUpdatedQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const total = Number(price) * updatedQuantity; // ✅ derived value


  return (
    <div className="w-full flex items-center justify-between border p-4 rounded-lg bg-white">
      {/* LEFT */}
      <div className="flex items-center gap-4 w-[40%]">
        <img
          src={image || "https://via.placeholder.com/80"}
          alt={productName}
          className="w-20 h-20 object-cover rounded"
        />

        <div>
          <h3 className="font-semibold">{productName}</h3>
          <p className="text-gray-500 text-sm">₹{price}</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-3">
        <button onClick={decreaseQty} className="px-3 py-1 border rounded">
          -
        </button>

        <span className="font-medium w-6 text-center">{updatedQuantity}</span>

        <button onClick={increaseQty} className="px-3 py-1 border rounded">
          +
        </button>
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <p className="font-semibold">₹{total}</p>
        <button
          onClick={() => onRemove(productId)}
          className="text-red-500 text-sm mt-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
