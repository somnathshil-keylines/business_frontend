import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios.js";
import Error from "../components/Error";
import { useApp } from "../context/AppContext";


function UserSidebar({ isOpen, onClose }) {
  const { cart, wishlist, user, order } = useApp();

  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const [orderCount, setOrderCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(wishlist.length);

  useEffect(() => {
    if (!user) return; // ✅ guard

    setUserName(user.name);
    setUserEmail(user.email);
    setUserPhone(user.phone);

 
    setCartCount(cart.length);
  }, [user]);

  useEffect(() => {
       setWishlistCount(wishlist.length);
  }, [wishlist]);
  useEffect(() => {
          setOrderCount(order.length);
  }, [order]);

      if (!isOpen) return null;
      if (error) return <Error />;
  

          if (error) {
            return (
              <>
                <Error />
              </>
            );
          }
    

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-2xl transform transition-transform duration-300">
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
              {userName?.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                {userName}
              </h2>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <ul className="p-6 space-y-2 text-sm">
          <li>
            <Link
              to="/orders"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <i className="fa-solid fa-truck fa-solid  fa-2x"></i>
              <span className="text-lg">My Orders</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {orderCount ? orderCount : 0}
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/wishlist"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <i className="fa-solid fa-heart fa-solid  fa-2x"></i>
              <span className="text-lg">Wishlist</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {wishlistCount ? wishlistCount : 0}
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <i className="fa-solid fa-cart-arrow-down fa-solid  fa-2x"></i>
              <span className="text-lg">Cart</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount ? cartCount : 0}
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <i className="fa-solid fa-user fa-solid  fa-2x"></i>
              <span className="text-lg">Profile</span>
            </Link>
          </li>
        </ul>

        {/* Footer / Logout */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="w-full flex items-center justify-center gap-2 text-red-500 hover:text-white hover:bg-red-500 border border-red-500 rounded-lg py-3 transition font-semibold"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSidebar;
