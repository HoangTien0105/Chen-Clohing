import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={64} // Adjust width as needed
            height={64} // Adjust height as needed
            className="h-16 mr-3"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-4">
          <ul className="flex space-x-4 mt-4 font-bold text-white">
            <li>
              <Link href="/" className="text-white hover:text-gray-500">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-500">About</Link>
            </li>
            <li>
              <Link href="/products" className="text-white hover:text-gray-500">Products</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-500">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;