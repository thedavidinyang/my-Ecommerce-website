
import { useCart } from '../context/CartContext'; 
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, updateCartItem, removeCartItem } = useCart(1);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link href="/">Start shopping!</Link></p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                <div className="flex space-x-4 mt-2">
                  <button 
                    onClick={() => updateCartItem(item.id, item.quantity - 1)} 
                    className="bg-gray-300 text-gray-800 py-1 px-3 rounded"
                  >
                    -
                  </button>
                  <button 
                    onClick={() => updateCartItem(item.id, item.quantity + 1)} 
                    className="bg-gray-300 text-gray-800 py-1 px-3 rounded"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeCartItem(item.id)} 
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
