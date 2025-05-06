import { useEffect, useRef, useState } from "react";
import "../index.css";

function HomeTwo({ image, title, info }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row-reverse items-center gap-6 p-6"
    >
      {/* Image Section - Animate from left to right */}
      <div
        className={`transition-transform duration-1000 transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
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

export default HomeTwo;
