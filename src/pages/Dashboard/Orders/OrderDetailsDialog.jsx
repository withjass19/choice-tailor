import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderDetailsDialog({
  open,
  setOpen,
  order,
}) {
  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto">

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#061735]">
            Order Details
          </DialogTitle>
        </DialogHeader>

        {/* Order Summary */}

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-[#061735]">
              Order Information
            </h3>

            <div className="mt-4 space-y-3 text-sm">

              <p>
                <strong>Order Number :</strong>{" "}
                {order.order_number}
              </p>

              <p>
                <strong>Payment :</strong>{" "}
                {order.payment_status}
              </p>

              <p>
                <strong>Total :</strong> ₹
                {Number(order.total_amount).toLocaleString(
                  "en-IN"
                )}
              </p>

              <div className="flex items-center gap-2">
                <strong>Status :</strong>

                <OrderStatusBadge
                  status={order.order_status}
                />
              </div>

              <p>
                <strong>Date :</strong>{" "}
                {new Date(
                  order.created_at
                ).toLocaleString()}
              </p>

            </div>
          </div>

          {/* Delivery */}

          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-[#061735]">
              Delivery Address
            </h3>

            {order.addresses ? (
              <div className="mt-4 text-sm space-y-2">

                <p>
                  {order.addresses.full_name}
                </p>

                <p>
                  {order.addresses.phone}
                </p>

                <p>
                  {order.addresses.address_line_1}
                </p>

                <p>
                  {order.addresses.city},{" "}
                  {order.addresses.state}
                </p>

                <p>
                  {order.addresses.pincode}
                </p>

              </div>
            ) : (
              <p className="mt-4 text-sm text-gray-500">
                Address not available.
              </p>
            )}
          </div>

        </div>

        {/* Products */}

        <div className="mt-8">

          <h3 className="mb-4 text-xl font-bold text-[#061735]">
            Ordered Products
          </h3>

          <div className="space-y-4">

            {order.order_items?.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 rounded-xl border p-4"
              >
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="h-24 w-24 rounded-lg object-contain"
                />

                <div className="flex-1">

                  <h4 className="font-bold">
                    {item.product_name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>

                  <p className="mt-2 text-sm">
                    Qty : {item.quantity}
                  </p>

                </div>

                <div className="font-bold">
                  ₹
                  {Number(
                    item.total_price
                  ).toLocaleString("en-IN")}
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex justify-end gap-3">

          <button className="rounded-lg border px-5 py-2">
            Download Invoice
          </button>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg bg-[#061735] px-5 py-2 text-white"
          >
            Close
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}