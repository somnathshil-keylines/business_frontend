import { createContext, useContext, useState } from "react";
import { useApp } from "./AppContext";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const { cart, setCart } = useApp();

  const [billingAddress, setBillingAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [placingOrder, setPlacingOrder] = useState(false);

  const clearCheckout = () => {
    setBillingAddress("");
    setShippingAddress("");
    setSameAsBilling(true);
    setNotes("");
    setPaymentMethod("cod");
  };

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        billingAddress,
        setBillingAddress,
        shippingAddress,
        setShippingAddress,
        sameAsBilling,
        setSameAsBilling,
        notes,
        setNotes,
        paymentMethod,
        setPaymentMethod,
        placingOrder,
        setPlacingOrder,
        clearCheckout,
        setCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
