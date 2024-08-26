export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-gray-400">
              We are a leading e-commerce Firm connecting you with top products.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-gray-400">Email: support@ecommerce.com</p>
            <p className="mt-2 text-gray-400">Phone: +234 596 789</p>
          </div>
        </div>

       
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} E-commerce Brand. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
