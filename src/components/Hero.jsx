import Img from "../assets/img1.avif";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";

export default function App() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/bg-pic5.png')" }}
    >
      <div
        className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-around 
                   gap-10 px-6 md:px-10 py-20 md:py-30 max-w-7xl mx-auto"
      >
        {/* Text Section */}
        <div className="px-4 md:px-10 flex flex-col gap-5 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl text-light">Lorem</h1>
          <p className="text-base sm:text-lg md:text-2xl font-medium text-light leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            optio, animi soluta quidem est id? Hic reprehenderit, fugit quae
            dolor quia quisquam. Delectus asperiores beatae saepe minus laborum
            doloremque eveniet!
          </p>
        </div>

        {/* Image Section */}
        <img
          className="w-4/5 sm:w-3/4 md:w-[450px] lg:w-[550px] rounded-2xl shadow-lg"
          src={Img}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
