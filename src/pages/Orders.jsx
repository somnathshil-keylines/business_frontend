import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api/axios";
import FullPageLoader from "../components/FullPageLoader";
import Error from "../components/Error";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await api.get("/orders");

        setOrders(res.data.data.orders);
        setOrderItems(res.data.data.order_items);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <FullPageLoader />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-8">My Orders</h1>

        {orders.length === 0 && (
          <div className="bg-white shadow rounded p-6 text-gray-500">
            No orders found.
          </div>
        )}

        <div className="space-y-8">
          {orders.map((order) => {
            const items = orderItems.filter(
              (item) => item.order_id === order.id
            );

            return (
              <div key={order.id} className="bg-white shadow rounded-lg p-6">
                {/* Order Header */}
                <div className="flex flex-wrap justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-semibold">Order #{order.id}</h2>
                    <p className="text-sm text-gray-500">
                      {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Status:</span>{" "}
                      <span className="text-yellow-600">
                        {order.order_status}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Payment:</span>{" "}
                      {order.payment_method}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="text-sm text-gray-600 mb-4">
                  <p>
                    <span className="font-medium">Shipping:</span>{" "}
                    {order.shipping_address}
                  </p>
                </div>

                {/* Order Items */}
                <div className="border-t pt-4 space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <p className="font-medium">{item.product_name}</p>
                        <p className="text-gray-500">Qty: {item.quantity}</p>
                      </div>

                      <p className="font-semibold">₹{item.total}</p>
                    </div>
                  ))}
                </div>

                {/* Price Summary */}
                <div className="border-t mt-4 pt-4 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{order.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{order.tax_amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{order.shipping_charge}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{order.discount_amount}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Total</span>
                    <span>₹{order.total_amount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Orders;
