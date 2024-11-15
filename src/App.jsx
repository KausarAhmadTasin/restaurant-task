import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import CustomersSay from "./components/CustomersSay/CustomersSay";
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
      </div>
    </>
  );
}

export default App;
