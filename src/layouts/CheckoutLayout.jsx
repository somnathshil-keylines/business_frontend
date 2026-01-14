
import { Outlet } from "react-router-dom";
import { CheckoutProvider } from "../context/CheckoutContext";

function CheckoutLayout() {
  return (
    <CheckoutProvider>
      <Outlet />
    </CheckoutProvider>
  );
}

export default CheckoutLayout;
