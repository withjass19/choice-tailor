import OrderRow from "./OrderRow";

export default function OrderTable({
  loading,
  orders,
  onViewDetails,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px]">
        <thead>
          <tr className="border-y bg-gray-50 text-left text-sm">
            <th className="p-4">ORDER</th>
            <th className="p-4">PRODUCT</th>
            <th className="p-4">DATE</th>
            <th className="p-4">AMOUNT</th>
            <th className="p-4">STATUS</th>
            <th className="p-4">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={6}
                className="p-8 text-center text-gray-500"
              >
                Loading orders...
              </td>
            </tr>
          ) : orders.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="p-8 text-center text-gray-500"
              >
                No orders found.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                onViewDetails={onViewDetails}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}