import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Comics from "./Pages/Comics";
import Characters from "./Pages/Characters";
import Character from "./Pages/Character";
import Favorites from "./Pages/Favorites";

// import Cookies from "js-cookie";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics/:characterId" element={<Character />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
