import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('pizza-bg.png')",
          zIndex: 40,
        }}
      />
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
