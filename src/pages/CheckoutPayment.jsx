import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext";
import Navbar from "../components/Navbar";
import api from "../api/axios";
import { useApp } from "../context/AppContext";

function CheckoutPayment() {
 const {  refreshOrderList } = useApp();
  const navigate = useNavigate();
  const {
    cart,
    billingAddress,
    shippingAddress,
    sameAsBilling,
    notes,
    paymentMethod,
    setPaymentMethod,
    placingOrder,
    setPlacingOrder,
    clearCheckout,
    setCart,
  } = useCheckout();

  // Safety check
  if (!cart || cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const placeOrder = async () => {
    try {
      setPlacingOrder(true);

      await api.post("/orders-add", {
        product_items: cart.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
        payment_method: paymentMethod,
        billing_address: billingAddress,
        shipping_address: sameAsBilling ? billingAddress : shippingAddress,
        notes,
        tax_amount: 18,
        shipping_charge: 100,
        discount_amount: 0,
      });
      
      await api.post("/cart/delete-all", {
        product_ids: cart.map((item) => item.product_id),
      });
      refreshOrderList();
      // Clear everything
      setCart([]);
      clearCheckout();

      navigate("/orders");
    } catch (err) {
      alert("Order failed. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Checkout — Payment
          </h1>

          {/* Payment options */}
          <div className="space-y-4">
            <label className="flex items-center gap-3 border p-4 rounded cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <span>
                <p className="font-medium">Cash on Delivery</p>
                <p className="text-sm text-gray-500">
                  Pay when product arrives
                </p>
              </span>
            </label>

            <label className="flex items-center gap-3 border p-4 rounded cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              <span>
                <p className="font-medium">Online Payment</p>
                <p className="text-sm text-gray-500">
                  UPI / Card / Net Banking
                </p>
              </span>
            </label>
          </div>

          {/* Place order */}
          <button
            onClick={placeOrder}
            disabled={placingOrder}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition disabled:opacity-60"
          >
            {placingOrder ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckoutPayment;
