import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import fakeProducts from "@/mocks/products";
import ProductCard from "@/components/Product/ProductCard";
import ProductSlider from "@/components/Product/ProductSlider";

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/chen-clothing-bg.png')" }}
      >
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Chen Clothing Store!
        </h1>
        <p className="mt-4 text-xl text-gray-300 drop-shadow-md">
          Cửa hàng thời trang uy tín hàng đầu Việt Nam
        </p>
        <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
          Mua ngay
        </button>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Tại sao nên chọn chúng tôi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
            <div className="feature-card bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/icons/free-shipping.svg"
                alt="Free-Shipping"
                width={50}
                height={50}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-blue-600">
                Miễn phí vận chuyển
              </h3>
              <p className="text-gray-600 mt-2">
                Vận chuyển miễn phí toàn quốc cho các đơn hàng từ 500K.
              </p>
            </div>
            <div className="feature-card bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/icons/ez-return.svg"
                alt="Easy Return"
                width={50}
                height={50}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-blue-600">
                Đổi trả dễ dàng
              </h3>
              <p className="text-gray-600 mt-2">
                Hỗ trợ đổi trả trong vòng 7 ngày không cần lý do.
              </p>
            </div>
            <div className="feature-card bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/icons/quality.svg"
                alt="High Quality"
                width={50}
                height={50}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-blue-600">
                Chất lượng cao
              </h3>
              <p className="text-gray-600 mt-2">
                Sản phẩm được kiểm tra kỹ lưỡng trước khi giao đến tay bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section
        className="py-24 bg-white"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Sản phẩm nổi bật
          </h2>
          <ProductSlider products={fakeProducts} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
