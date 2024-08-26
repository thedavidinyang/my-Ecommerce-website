import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between max-w-7xl mx-auto">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </header>
  );
}
