import {
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import Logo from "../assets/logo-blue.png";

export default function App() {
  return (
    <footer className="bg-light text-dark py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 items-center py-3 md:gap-20 flex-wrap">
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4">
          <div>
            <img className="w-32" src={Logo} alt="Logo" />
          </div>
          <p className="text-[18px] md:text-[20px] text-center md:text-left">
            Join us to take your projects to the next level.
          </p>
          <p className="font-bold text-[18px] md:text-[20px]">Follow Us</p>
          <div className="flex justify-center gap-5 md:gap-6 py-4">
            <Twitter className="w-5 md:w-8 h-8 cursor-pointer transition-transform duration-300 hover:-translate-y-2" />
            <Facebook className="w-5 md:w-8 h-8 cursor-pointer transition-transform duration-300 hover:-translate-y-2" />
            <Instagram className="w-5 md:w-8 h-8 cursor-pointer transition-transform duration-300 hover:-translate-y-2" />
            <Linkedin className="w-5 md:w-8 h-8 cursor-pointer transition-transform duration-300 hover:-translate-y-2" />
            <Youtube className="w-5 md:w-8 h-8 cursor-pointer transition-transform duration-300 hover:-translate-y-2" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-10 md:w-1/4">
          <p className="font-bold text-[24px] md:text-[30px]">Contact</p>
          <p className="flex items-center gap-2 text-center md:text-left">
            <MapPin className="w-5 h-5" /> Address:{" "}
            <span className="font-bold">66 Gulberg, Lahore</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> Phone:{" "}
            <span className="font-bold">99 999 999 99</span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> Email:{" "}
            <span className="font-bold">abcd@sobtech.com</span>
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-8 md:w-1/4">
          <p className="font-bold text-[24px] md:text-[30px]">Newsletter</p>
          <p className="text-[16px] md:text-[20px] text-center md:text-left">
            Stay updated. Subscribe to our newsletter.
          </p>
          <div className="relative flex border-2 border-dark rounded-2xl w-full max-w-sm">
            <input
              className="h-12 md:h-16 outline-none px-4 rounded-2xl w-[80%]"
              type="text"
              placeholder="Enter your email"
            />
            <Send className="absolute right-3 top-1/2 -translate-y-1/2 h-6 cursor-pointer w-5" />
          </div>
        </div>
      </div>
      <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8755.158848483072!2d74.37111735609506!3d31.489282870667058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c3494884f3%3A0xc72efe41fc402ae7!2sE%2F78%20Street%203%2C%20Iqbal%20Park%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1762777736146!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 2 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 border-t border-dark pt-4 text-sm md:text-base">
        <p>© Yoursitename 2024 | All Rights Reserved</p>
        <div className="flex gap-4 md:gap-6">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
}
