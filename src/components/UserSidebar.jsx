import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios.js";
import Error from "../components/Error";

function UserSidebar({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    (async() => {
         try {
            setError(false);
              const response = await api.get("/user");
              console.log(response.data.user.name);
              setUserName(response.data.user.name);
              setUserEmail(response.data.user.email);
              setUserPhone(response.data.user.phone);
         } catch (error) {
            setError(true);
         }
           
    })()
  }, []);

          if (error) {
            return (
              <>
                <Error />
              </>
            );
          }
    

  return (
    // <>
    //   {/* Overlay */}
    //   <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

    //   {/* Sidebar */}
    //   <div className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-lg p-6">
    //     <div className="flex items-center justify-between mb-6">
    //       <h2 className="text-lg font-semibold">{userName}</h2>
    //       <p className="text-lg font-semibold">{userEmail}</p>
    //       <h2 className="text-lg font-semibold">User Menu</h2>
    //       <button onClick={onClose} className="text-xl">
    //         ✕
    //       </button>
    //     </div>

    //     <ul className="space-y-4 text-sm">
    //       <li>
    //         <Link
    //           to="/orders"
    //           onClick={onClose}
    //           className="block hover:text-blue-500"
    //         >
    //           My Orders
    //         </Link>
    //       </li>

    //       <li>
    //         <Link
    //           to="/wishlist"
    //           onClick={onClose}
    //           className="block hover:text-blue-500"
    //         >
    //           Wishlist
    //         </Link>
    //       </li>

    //       <li>
    //         <Link
    //           to="/cart"
    //           onClick={onClose}
    //           className="block hover:text-blue-500"
    //         >
    //           Cart
    //         </Link>
    //       </li>

    //       <li>
    //         <Link
    //           to="/profile"
    //           onClick={onClose}
    //           className="block hover:text-blue-500"
    //         >
    //           Profile
    //         </Link>
    //       </li>

    //       <li className="pt-4 border-t">
    //         <button
    //           onClick={() => {
    //             localStorage.removeItem("token");
    //             window.location.href = "/login";
    //           }}
    //           className="text-red-500 hover:text-red-600"
    //         >
    //           Logout
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    // </>
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
              📦 <span>My Orders</span>
            </Link>
          </li>

          <li>
            <Link
              to="/wishlist"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              ❤️ <span>Wishlist</span>
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              🛒 <span>Cart</span>
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              👤 <span>Profile</span>
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
