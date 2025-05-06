import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import InfoCards from "./components/InfoCards";
import Nav from "./components/Nav";

function App() {
  const [selectedCard, setSelectedCard] = useState(null); //new
  return (
    <>
      <Nav />
      <InfoCards
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </>
  );
}

export default App;
