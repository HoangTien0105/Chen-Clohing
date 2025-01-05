import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "@/components/Product/ProductCard";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2} // Hiển thị một sản phẩm
      spaceBetween={20}
      loop={true}
      coverflowEffect={{
        rotate: 10, // Góc xoay của các thẻ
        stretch: 0, // Khoảng cách giữa các thẻ
        depth: 150, // Chiều sâu của các thẻ
        modifier: 1,
        slideShadows: false, // Bóng đổ cho các thẻ
      }}
      pagination={{ 
        clickable: true
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;