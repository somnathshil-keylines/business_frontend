import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext";
import Navbar from "../components/Navbar";

function CheckoutAddress() {
  const navigate = useNavigate();
  const {
    billingAddress,
    setBillingAddress,
    shippingAddress,
    setShippingAddress,
    sameAsBilling,
    setSameAsBilling,
    notes,
    setNotes,
    cart,
  } = useCheckout();

  // Safety: no cart → back to cart
  if (!cart || cart.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Checkout — Address
          </h1>

          {/* Billing Address */}
          <div>
            <label className="block font-medium mb-1">Billing Address</label>
            <textarea
              className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
              rows={3}
              placeholder="Enter billing address"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
            />
          </div>

          {/* Same as billing */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={sameAsBilling}
              onChange={(e) => setSameAsBilling(e.target.checked)}
            />
            <span className="text-sm text-gray-700">
              Shipping address same as billing
            </span>
          </div>

          {/* Shipping Address */}
          {!sameAsBilling && (
            <div>
              <label className="block font-medium mb-1">Shipping Address</label>
              <textarea
                className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
                rows={3}
                placeholder="Enter shipping address"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block font-medium mb-1">
              Order Notes (optional)
            </label>
            <textarea
              className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
              rows={2}
              placeholder="Any special instructions?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/checkout/payment")}
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckoutAddress;
