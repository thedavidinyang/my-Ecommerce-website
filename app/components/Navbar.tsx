import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-black text-lg font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/signup" className="text-white">
            Sign Up
          </Link>
          <Link href="/login" className="text-white">
            Login
          </Link>
          <Link href="/search" className="text-white">
            Search
          </Link>
          <Link href="/cart" className="text-yellow flex items-center">
            <FaShoppingCart className="h-6 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
