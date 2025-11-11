import { useState } from "react";
import Pic1 from "../assets/img1.svg";
import Pic2 from "../assets/img2.svg";
import Pic3 from "../assets/img3.svg";

export default function App() {
  const [isHover, setHover] = useState(null);

  const items = [Pic1, Pic2, Pic3];

  return (
    <div
      id="2"
      className="bg-cover bg-center py-8 bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/bg-pic5.png')" }}
    >
      <div className="flex flex-wrap justify-center bg-light mx-auto rounded-2xl max-w-7xl gap-10 px-5">
        {items.map((pic, index) => (
          <div
            key={index}
            className="py-10 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]  overflow-hidden flex flex-col items-start"
          >
            {/* Image + Hover Menu */}
            <div
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className="relative flex items-center"
            >
              <img
                className={`py-5 duration-500 transition-all hover:rotate-6 cursor-pointer 
                  ${isHover === index ? "w-40 h-40" : "w-24 h-24"}`}
                src={pic}
                alt=""
              />

              <div
                className={`bg-dark absolute top-0 left-2/3 md:left-3/4 lg:left-2/3 duration-300 transition-all cursor-pointer px-4 py-3 rounded-2xl
                  ${isHover === index ? "opacity-100" : "opacity-0"}`}
              >
                <ul className="text-light text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li className="cursor-pointer hover:text-lg transition-all">
                    Planning
                  </li>
                  <li className="cursor-pointer hover:text-lg transition-all">
                    Brainstorming
                  </li>
                  <li className="cursor-pointer hover:text-lg transition-all">
                    Collaborating
                  </li>
                  <li className="cursor-pointer hover:text-lg transition-all">
                    Innovating
                  </li>
                </ul>
              </div>
            </div>

            {/* Text Content */}
            <h2 className="py-3 text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Project Management
            </h2>
            <p className="py-3 text-base sm:text-lg md:text-[20px] text-dark leading-relaxed">
              Real estate is a lucrative industry that involves buying, selling,
              and renting properties. It’s a field that encompasses residential
              and commercial ventures.
            </p>
            <a
              className="py-3 text-lg sm:text-xl md:text-2xl text-dark font-medium hover:font-bold"
              href="#"
            >
              More about →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
