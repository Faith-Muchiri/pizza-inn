import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PizzaListPage from "./pages/PizzaListPage";
import PizzaPage from "./pages/PizzaPage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pizzas" element={<PizzaListPage />} />
        <Route path="/pizzas/:pizzaId" element={<PizzaPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
