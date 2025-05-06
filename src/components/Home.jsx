import { useEffect, useState } from "react";
import "../index.css";
import spyxfamily from "../image/SPYXFAMILY.jpg";

function Home({ image, title, info }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true);
  }, []);

  return (
    <div
      div
      id="home"
      className="flex flex-col lg:flex-row items-center gap-6 p-6 mt-10"
    >
      {/* Image Section */}
      <div
        className={`transition-transform duration-1000 transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } ease-in-out w-full lg:w-1/2`}
      >
        <img
          src={image}
          alt={title}
          className="object-cover w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Info Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{info}</p>
      </div>
    </div>
  );
}

export default Home;
