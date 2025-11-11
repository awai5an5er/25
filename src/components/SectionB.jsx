import { CircleCheck } from "lucide-react";
import Pic1 from "../assets/img1.avif";
import Pic2 from "../assets/image1.avif";
import Pic3 from "../assets/image2.avif";

export default function App() {
  const plans = [
    {
      name: "Basic Plan",
      img: Pic1,
    },
    {
      name: "Professional Plan",
      img: Pic2,
    },
    {
      name: "Premium Plan",
      img: Pic3,
    },
  ];

  const features = [
    "Mistakes To Avoid",
    "Your Startup",
    "Knew About Fonts",
    "Your Startup",
    "Knew About Fonts",
  ];

  return (
    <div id="1" className="bg-light py-10 px-5 md:px-10 z-50 relative">
      <div className="text-center space-y-2">
        <h2 className="text-lg sm:text-xl md:text-[20px] font-medium text-dark">
          Our Plans
        </h2>
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark">
          Grow with our expert
        </h1>
        <span className="block font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark">
          Development and guidance
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 py-12 justify-center items-center md:items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="px-6 py-6 flex flex-col bg-dark text-light w-full sm:w-[80%] md:w-[30%] rounded-2xl shadow-lg 
                       transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="flex justify-center md:justify-start px-2">
              <p className="text-2xl sm:text-[26px] md:text-[28px] font-bold">
                {plan.name}
              </p>
            </div>
            <div className="flex justify-center py-6">
              <img
                className="h-48 sm:h-56 md:h-60 w-full object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                src={plan.img}
                alt={plan.name}
              />
            </div>

            <hr className="border-light/40 mb-4" />
            <div className="py-4 px-2 font-medium">
              {features.map((feature, i) => (
                <p
                  key={i}
                  className="flex gap-3 sm:gap-4 items-center py-2 cursor-pointer text-base sm:text-lg"
                >
                  <CircleCheck className="text-light min-w-5" /> {feature}
                </p>
              ))}
            </div>
            <button
              className="w-full border-2 border-light bg-light text-dark px-6 py-3 mt-4 font-semibold text-lg 
                         transition-all duration-300 rounded-xl hover:bg-dark hover:text-light"
            >
              Start now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
