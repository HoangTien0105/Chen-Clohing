import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      className="product-card bg-white shadow-lg rounded-lg p-8 flex flex-col
      justify-between items-center text-center transition-transform transform 
      hover:scale-105 hover:shadow-2xl"
      style={{
        maxWidth: "300px",
        maxHeight: "550px",
        backgroundColor: "#663300",
        overflow: "hidden", // Mặc định ẩn
        position: "relative",
      }}
    >
      <div className="image-container">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <h3 className="text-xl text-white font-bold mt-4">{product.name}</h3>
      <p className="text-white font-semibold mt-2">{product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
