import About from "./components/About/About";
import Home from "./components/Home/Home";
import PopularFood from "./components/PopularFood/PopularFood";

function App() {
  return (
    <>
      <div className="font-raleway">
        <Home />
        <About />
        <PopularFood />
      </div>
    </>
  );
}

export default App;
