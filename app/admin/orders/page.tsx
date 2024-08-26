import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  customer: string;
  status: string;
  totalAmount: number;
}

export default function ManageOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simulate fetching orders from an API
    const dummyOrders = [
      { id: '1', customer: 'Nanak', status: 'Processing', totalAmount: 250 },
      { id: '2', customer: 'Williams Clark', status: 'Shipped', totalAmount: 180 },
    ];
    setOrders(dummyOrders);
  }, []);

  const updateOrderStatus = (id: string, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Order ID</th>
            <th className="py-2 px-4 border">Customer</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Total Amount</th>
            <th className="py-2 px-4 border">Actions</th>
            <th className="py-2 px-4 border">Details</th> {/* Add a new column for the link */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 border">{order.id}</td>
              <td className="py-2 px-4 border">{order.customer}</td>
              <td className="py-2 px-4 border">{order.status}</td>
              <td className="py-2 px-4 border">${order.totalAmount}</td>
              <td className="py-2 px-4 border">
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td className="py-2 px-4 border">
                {/* Add the Link to the details page */}
                <Link href={`/admin/orders/${order.id}`}>
                  <a className="text-blue-500">View Details</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
