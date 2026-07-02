import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

export default function CartDrawer() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const {
    cartItems,
    cartOpen,
    setCartOpen,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    subtotal,
  } = useCart();

  const handleCheckout = async () => {
    try {
      if (cartItems.length === 0) {
        toast.error("Your cart is empty.");
        return;
      }

      if (!isAuthenticated || !user) {
        toast.error("Please login to checkout.");
        setCartOpen(false);
        navigate("/login");
        return;
      }

      const { data: addresses, error: addressError } = await supabase
        .from("addresses")
        .select("id")
        .eq("user_id", user.id)
        .limit(1);

      if (addressError) throw addressError;

      if (!addresses || addresses.length === 0) {
        toast.error("Please add delivery address first.");
        setCartOpen(false);
        navigate("/dashboard/addresses");
        return;
      }

      const isLoaded = await loadRazorpayScript();

      if (!isLoaded) {
        toast.error("Razorpay SDK failed to load.");
        return;
      }

      const orderRes = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: subtotal,
        }),
      });

      const order = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(order?.message || "Order creation failed.");
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Choice Tailor",
        description: "Uniform Order Payment",
        order_id: order.id,

        prefill: {
          name: user.user_metadata?.full_name || "",
          email: user.email || "",
          contact: "",
        },

        notes: {
          brand: "Choice Tailor",
          user_id: user.id,
        },

        theme: {
          color: "#061735",
        },

        handler: async function (response) {
          const verifyRes = await fetch("/api/verify-razorpay-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (!verifyRes.ok || !verifyData.success) {
            toast.error("Payment verification failed.");
            return;
          }

          toast.success("Payment successful.");
          setCartOpen(false);

          console.log("Payment Response:", response);
          console.log("Cart Items:", cartItems);

          clearCart();

          // navigate("/order-success");
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Checkout failed:", error);
      toast.error(error.message || "Checkout failed.");
    }
  };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-[#061735]">
            <ShoppingCart size={22} />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="mt-10 text-center text-sm text-gray-500">
            Your cart is empty.
          </div>
        ) : (
          <div className="mt-6 flex h-[calc(100vh-120px)] flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-xl border p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#061735]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.category}
                    </p>

                    <p className="mt-2 font-bold text-[#b89b3c]">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="rounded border p-1"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="rounded border p-1"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-5">
              <div className="flex items-center justify-between text-lg font-bold text-[#061735]">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-5 w-full rounded-lg bg-[#061735] py-3 text-sm font-bold text-white"
              >
                Checkout
              </button>

              <button
                type="button"
                className="mt-3 w-full rounded-lg border py-3 text-sm font-bold"
              >
                View Cart
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}