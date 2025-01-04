import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

function ProductCard({ product }: { product: Product }): JSX.Element {
  return (
    <div
      className="product-card bg-white shadow-lg rounded-lg p-8 flex flex-col
      justify-between items-center text-center transition-transform transform 
      hover:scale-105 hover:shadow-2xl"
      style={{
        maxWidth: "300px",
        maxHeight: "550px",
        backgroundColor: "#663300",
      }}
    >
      <div className="relative w-full h-80">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill" // Sử dụng layout fill cho toàn diện tích
          objectFit="cover" // Đảm bảo hình ảnh được bao phủ đúng
          className="rounded-t-lg"
        />
      </div>
      <h3 className="text-xl text-white font-bold mt-4">{product.name}</h3>
      <p className="text-white font-semibold mt-2">{product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Chi tiết
      </Link>
    </div>
  );
}

export default ProductCard;
