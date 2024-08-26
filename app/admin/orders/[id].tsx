import { useRouter } from 'next/router';

export default function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Dummy order details data
  // Replace this with actual data fetching logic
  const order = {
    id: id || 'N/A', // Default value if id is undefined
    customer: 'Nanak',
    items: [
      { name: 'Product 1', quantity: 2, price: '$50.00' },
      { name: 'Product 2', quantity: 1, price: '$50.00' },
    ],
    total: '$100.00',
    status: 'Processing',
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Order Details for ID: {order.id}</h1>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> {order.total}</p>

      <h2 className="text-xl font-bold mb-4">Items</h2>
      <ul>
        {order.items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.quantity} x {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
