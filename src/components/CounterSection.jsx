import { useEffect, useRef, useState } from "react";
import { FaClock, FaCheck, FaSmile, FaHistory } from "react-icons/fa";
import CountUp from "react-countup";
import Tech from "../assets/devices.webp";

export default function CounterSection() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const counters = [
    {
      icon: <FaHistory className="text-dark text-4xl sm:text-5xl" />,
      number: 2025,
      label: "WORKING FROM",
    },
    {
      icon: <FaCheck className="text-dark text-4xl sm:text-5xl" />,
      number: 300,
      label: "PROJECTS COMPLETED",
    },
    {
      icon: <FaClock className="text-dark text-4xl sm:text-5xl" />,
      number: 40,
      label: "WEEKLY WORKING HOURS",
    },
    {
      icon: <FaSmile className="text-dark text-4xl sm:text-5xl" />,
      number: 300,
      label: "HAPPY CLIENTS",
    },
  ];

  return (
    <section
      id="4"
      ref={sectionRef}
      className="bg-light text-center py-10 sm:py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="flex justify-center items-center py-5">
        <img
          src={Tech}
          alt="Technology"
          className="w-full max-w-[500px] sm:max-w-[700px] h-auto object-contain rounded-xl"
        />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 mt-8 sm:mt-12">
        {counters.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 sm:space-y-3 bg-white/10 rounded-xl p-4 sm:p-6 
                       transition-transform duration-500 hover:scale-105"
          >
            {item.icon}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
              {startCount ? (
                <CountUp end={item.number} duration={3} separator="" />
              ) : (
                0
              )}
            </h2>
            <p className="text-xs sm:text-sm md:text-base tracking-wide italic text-dark/80">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
