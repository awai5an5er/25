import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import Team1 from "../assets/cr7.png";
import Team2 from "../assets/messi.png";
import Team3 from "../assets/neymar.png";
import Team4 from "../assets/modric.png";

export default function BackgroundVideo() {
  const team = [
    {
      name: ["Cristiano", "Ronaldo"],
      role: ["Senior", "Developer"],
      img: Team1,
    },
    { name: ["Neymar", "Jr"], role: ["Senior", "Developer"], img: Team3 },
    { name: ["Lionel", "Messi"], role: ["Senior", "Developer"], img: Team2 },
    { name: ["Luka", "Modric"], role: ["Senior", "Developer"], img: Team4 },
  ];

  return (
    <div
      id="3"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-10"
      style={{ backgroundImage: "url('/bg-pic5.png')" }}
    >
      {/* Title */}
      <h1 className="text-light text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center drop-shadow-lg">
        Our Team
      </h1>

      {/* Swiper Carousel */}
      <div className="w-full max-w-[900px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row items-center justify-center bg-light text-dark rounded-3xl shadow-xl overflow-hidden mx-auto w-[90%] sm:w-[80%] md:w-[70%]">
                {/* Image */}
                <img
                  className="w-full sm:w-1/2 h-64 sm:h-auto object-cover rounded-t-3xl sm:rounded-tr-none sm:rounded-bl-3xl"
                  src={member.img}
                  alt={member.name.join(" ")}
                />

                {/* Details */}
                <div className="flex flex-col gap-5 py-8 sm:py-12 px-5 sm:px-8 text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold leading-tight">
                    <span className="block">{member.name[0]}</span>
                    <span className="block">{member.name[1]}</span>
                  </div>
                  <div className="italic text-lg sm:text-xl text-gray-600">
                    <span className="block">{member.role[0]}</span>
                    <span className="block">{member.role[1]}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
