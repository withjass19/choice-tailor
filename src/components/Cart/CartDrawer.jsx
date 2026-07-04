import { useState } from "react";
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

const generateOrderNumber = () => {
  return `CT-${Date.now()}`;
};

export default function CartDrawer() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const [checkoutLoading, setCheckoutLoading] = useState(false);

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
      if (checkoutLoading) return;

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

      setCheckoutLoading(true);

      const { data: addresses, error: addressError } = await supabase
        .from("addresses")
        .select("id")
        .eq("user_id", user.id)
        .order("is_default", { ascending: false })
        .limit(1);

      if (addressError) throw addressError;

      if (!addresses || addresses.length === 0) {
        toast.error("Please add delivery address first.");
        setCartOpen(false);
        navigate("/dashboard/addresses");
        return;
      }

      const addressId = addresses[0].id;
      const orderNumber = generateOrderNumber();

      // replace only this part inside handleCheckout

      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          order_number: orderNumber,
          user_id: user.id,
          address_id: addressId,
          subtotal: Number(subtotal),
          shipping_charge: 0,
          total_amount: Number(subtotal),
          payment_status: "pending",
          order_status: "pending",
        })
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name || "Product",
        category: item.category || null,
        image: item.image || null,
        quantity: Number(item.quantity),
        unit_price: Number(item.price),
        total_price: Number(item.price) * Number(item.quantity),
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      clearCart();
      setCartOpen(false);

      toast.success("Order placed successfully.");

      navigate("/dashboard/orders");
    } catch (error) {
      console.error("Checkout failed:", error);
      toast.error(error.message || "Failed to place order.");
    } finally {
      setCheckoutLoading(false);
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
                disabled={checkoutLoading}
                className="mt-5 w-full rounded-lg bg-[#061735] py-3 text-sm font-bold text-white disabled:opacity-60"
              >
                {checkoutLoading ? "Placing Order..." : "Place Order"}
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
