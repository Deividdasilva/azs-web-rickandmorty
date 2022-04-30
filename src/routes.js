
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Episodio from "./pages/Episodio";
import Header from './Components/Header';
import Favoritos from "./pages/Favoritos";
import Vistos from "./pages/Vistos";

const routes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/episodio/:id" element={<Episodio />} exact />
        <Route exact path="/favoritos" element={<Favoritos />} />
        <Route exact path="/vistos" element={<Vistos />} />
      </Routes>
    </Router>
  );
}

export default routes;