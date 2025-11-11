import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Tech from "../assets/devices.webp";
import S1 from "../assets/s1.webp";
import S2 from "../assets/s2.webp";
import S3 from "../assets/s3.webp";
import S4 from "../assets/s4.webp";
import S5 from "../assets/s5.webp";
import S6 from "../assets/s6.webp";
import S7 from "../assets/s7.webp";
import S8 from "../assets/s8.webp";
import S9 from "../assets/s9.webp";
import S10 from "../assets/s10.webp";
import S11 from "../assets/s11.webp";

export default function App() {
  return (
    <div
      className="flex flex-col gap-15 items-center justify-center bg-dark py-20"
      style={{
        backgroundImage: "url('/bg-pic5.png')", // replace with your image
      }}
    >
      <div className="px-10 text-light text-2xl  justify-center items-center">
        <h1 className=" ">
          We are working on these{" "}
          <span className="italic font-medium">Technologies</span>
        </h1>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={5}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="w-[40%]  md:w-[700px]"
        >
          <SwiperSlide>
            <img className="cursor-pointer" src={S1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={S11} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
