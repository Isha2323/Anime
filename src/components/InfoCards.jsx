import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import spyxfamily from "../image/SPYXFAMILY.jpg";
import deathnote from "../image/deathnote.jpg";
import naruto from "../image/Naruto.jpg";
import your from "../image/your.jpg";

function InfoCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      id: 1,
      title: "SpyXFamily",
      info: "This is some information about card one.",
      image: spyxfamily,
    },
    {
      id: 2,
      title: "DeathNote",
      info: "This is some information about card two.",
      image: deathnote,
    },
    {
      id: 3,
      title: "Naruto",
      info: "This is some information about card three.",
      image: naruto,
    },
    {
      id: 4,
      title: "Your Lie in April",
      info: "This is some information about card four.",
      image: your,
    },
  ];

  // Close the info section if clicked outside of the cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the card container
      if (!cardRefs.current.some((ref) => ref && ref.contains(event.target))) {
        setSelectedCard(null); // Close info if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCardClick = (cardId) => {
    // If the same card is clicked again, close the info
    if (selectedCard === cardId) {
      setSelectedCard(null); // Reset to null, to close the info
    } else {
      setSelectedCard(cardId); // Show info for the clicked card
    }
  };

  return (
    <>
      <div
        id="InfoCards"
        className="max-w-full mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-full md:w-full lg:w-[350px] xl:w-[400px]"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.info}</p>
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click event from bubbling up
                  handleCardClick(card.id); // Toggle the selected card
                }}
              >
                {selectedCard === card.id ? "Hide Info" : "Click Here"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* More Info Section Below the Card Grid */}
      {selectedCard && (
        <div className="mt-8 p-6 bg-pink-100 border border-pink-300 rounded-lg shadow-md mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60">
          <h2 className="text-xl font-bold mb-2">
            {cards[selectedCard - 1].title} Details
          </h2>
          <p>{cards[selectedCard - 1].info}</p>
        </div>
      )}
    </>
  );
}

export default InfoCards;
