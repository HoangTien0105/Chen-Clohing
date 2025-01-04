import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/cloth-bg.png')" }}
      >
        <h1 className="text-5xl font-extrabold text-blue-500 drop-shadow-lg">
          Welcome to My Clothing Store!
        </h1>
        <p className="mt-4 text-xl text-gray-200 drop-shadow-md">
          Discover the latest fashion trends and shop your favorite styles.
        </p>
        <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
          Shop Now
        </button>
      </section>

      <Footer />
    </main>
  );
};

export default Home;