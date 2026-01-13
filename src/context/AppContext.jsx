import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [userRes, cartRes, wishlistRes, orderRes] = await Promise.all([
          api.get("/user"),
          api.get("/cart"),
          api.get("/wishlist"),
          api.get("/orders"),
        ]);

        setUser(userRes.data.user);
        setCart(cartRes.data.carts || []);
        setWishlist(wishlistRes.data.wishlists || []);
        setOrder(orderRes.data.orders || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  return (
    <AppContext.Provider
      value={{ user, cart, wishlist, setCart, setWishlist, order, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
