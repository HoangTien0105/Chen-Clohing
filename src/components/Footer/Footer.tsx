import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="p-5 text-white text-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          href="_app.tsx"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          Chính sách bảo hành
        </Link>
        <Link
          href="_app.tsx"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          Chính sách đổi trả
        </Link>
        <Link
          href="/pages/contact"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          Liên hệ
        </Link>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          href={"https://www.facebook.com/hoang.tien.263953/"}
          target="_blank"
          rel="nopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          Facebook
        </Link>
        <Link
          href="https://www.instagram.com/51neit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          Instagram
        </Link>
        <Link
          href="https://X.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          X
        </Link>
      </div>

      <p className="text-gray-400 text-sm mt-4">
        &copy; {new Date().getFullYear()} Chen Clothing Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
