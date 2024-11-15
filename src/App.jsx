import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import CustomersSay from "./components/CustomersSay/CustomersSay";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import PopularFood from "./components/PopularFood/PopularFood";

function App() {
  return (
    <>
      <div className="font-raleway">
        <Home />
        <About />
        <PopularFood />
        <BookTable />
        <CustomersSay />
        <Footer />
      </div>
    </>
  );
}

export default App;
