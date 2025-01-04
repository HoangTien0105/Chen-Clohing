import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductSlider.module.css"; 
import ProductCard from "@/components/Product/ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductSliderProps {
  products: Product[];
}

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick} style={{ fontSize: '24px' }}>
    Next
  </div>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick} style={{ fontSize: '24px' }}>
    Prev
  </div>
);

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};

export default ProductSlider;