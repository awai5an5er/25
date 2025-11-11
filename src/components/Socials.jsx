import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Hand from "../assets/bg-img2.png";
import { Instagram, Facebook, Youtube, Linkedin, Twitter } from "lucide-react";
import { Navigation, Autoplay } from "swiper/modules";
import Ig from "../assets/insta.png";
import Fb from "../assets/fb.png";
import Yt from "../assets/Yt.svg";
import Li from "../assets/Li.svg";
import Tw from "../assets/Tw.svg";

export default function App() {
  const socialImages = [Ig, Fb, Yt, Li, Tw];
  return (
    <div
      className="hidden md:block relative w-full h-screen bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-pic5.png')" }}
    >
      <img
        className="absolute -bottom-30 left-25 w-full h-auto md:h-[1000px] px-5"
        src={Hand}
        alt="Hand"
      />
      <div className="relative z-10 flex flex-col gap-24 justify-around  px-5">
        <h1 className="text-light font-bold text-7xl flex justify-end pr-10 drop-shadow-lg">
          Check us out!
        </h1>
        <div className="flex justify-end px-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            className="w-[300px]"
          >
            const socialImages = [Ig, Facebook, Youtube, Linkedin, Twitter];
            {socialImages.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={image}
                  alt={`social-${idx}`}
                  className="w-40 h-40 cursor-pointer hover:scale-110 transition-transform duration-300   "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
