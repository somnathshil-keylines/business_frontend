import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [userRes, cartRes, wishlistRes, orderRes, productRes] = await Promise.all([
          api.get("/user"),
          api.get("/cart"),
          api.get("/wishlist"),
          api.get("/orders"),
          api.get("/products"),
        ]);

        setUser(userRes.data.user);
        setCart(cartRes.data.carts || []);
        setWishlist(wishlistRes.data.wishlists || []);
        setOrder(orderRes.data.orders || []);
        setProducts(productRes.data.products || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const refreshWishlist = async () => {
    const res = await api.get("/wishlist");
    setWishlist(res.data.wishlists || []);
  };

    const refreshOrderList = async () => {
      const res = await api.get("/orders");
      setOrder(res.data.orders || []);
    };

  return (
    <AppContext.Provider
      value={{
        user,
        cart,
        wishlist,
        setCart,
        setWishlist,
        order,
        products,
        loading,
        refreshWishlist,
        refreshOrderList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
