import { useState } from "react";
import "./index.css";
import spyxfamily from "./image/SPYXFAMILY.jpg";
import Navbar from "./components/Navbar";
import InfoCards from "./components/InfoCards";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HomeTwo from "./components/HomeTwo";
import naruto from "./image/Naruto.jpg";
function App() {
  const [selectedCard, setSelectedCard] = useState(null); //new
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Nav />
        <div className="p-8">
          <Home
            image={spyxfamily}
            title="SpyXFamily"
            info="Spy x Family is an action-comedy anime and manga about a master spy who forms a fake family to infiltrate a political event. The spy, Twilight, adopts a telepathic girl named Anya and marries an assassin, Yor, creating a family unaware of each other's identities and secret lives. They navigate their daily lives while trying to keep their secret identities hidden, fostering a bond as a family despite their unique backgrounds."
          />
        </div>
        <HomeTwo
          image={naruto}
          title="Naruto"
          info="Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village."
        />

        {/* Content */}
        <InfoCards
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />

        {/* Footer will stay at the bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App;
