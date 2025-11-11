import { LoaderPinwheel } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Arrow from "../assets/bottom-arrow.svg";

export default function App() {
  return (
    <div
      className="bg-light px-6 md:px-12 py-12 flex flex-col md:flex-row items-center w-full h-full overflow-hidden gap-10 "
      style={{
        backgroundImage: "url('/building.png')",
        backgroundPosition: "0% 10%",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/40"></div> */}
      <h1
        className="z-30 text-light text-center md:text-left font-extrabold py-8 justify-center md:text-transparent md:bg-clip-text md:select-none
                   bg-cover bg-center leading-tight 
                   text-[2.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] md:opacity-0 hover:opacity-100 transition-all duration-400"
        style={{
          backgroundImage: "url('/bg-bg.png')",
          WebkitBackgroundClip: "text",
        }}
      >
        WE HAVE THE SOLUTION
      </h1>
      <div className="  md:hidden justify-center items-center   w-16 ">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          direction={"vertical"}
          pagination={{ clickable: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="h-40 md:h-64 [&_.swiper-pagination]:hidden"
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <img
                  className=" w-8 h-8 md:w-12 md:h-12"
                  src={Arrow}
                  alt="arrow"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
