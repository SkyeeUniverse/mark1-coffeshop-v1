import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Product from "./components/Product";
import Vlog from "./components/Vlog";
import Newsletters from "./components/Newsletters";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Product />
      <Vlog />
      <Newsletters />
      <MyFooter />
    </>
  );
}

export default App;
