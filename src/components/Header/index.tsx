import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between"> 
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo-clothing.png"
            alt="Logo"
            className="h-10 mr-3"
          />
          <h1 className="text-2xl font-bold">Clothing Store</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-4">
          <ul className="flex space-x-4 mt-4">
            <li>
              <Link href={"/"} className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href={"/products"} className="hover:text-blue-500">Products</Link>
            </li>
            <li>
              <Link href={"/about"} className="hover:text-blue-500">About</Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:text-blue-500">Contact</Link>
            </li>
          </ul>
        </nav>

         {/* Mobile Menu Button */}
         <button className="md:hidden bg-gray-700 p-2 rounded">
          <span className="sr-only">Open Menu</span>
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
