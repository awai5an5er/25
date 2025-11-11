import Logo from "../assets/logo-blue.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");

      const nav = document.getElementById("navbar");
      if (nav) {
        const navTop = nav.offsetTop;
        setIsSticky(window.scrollY >= navTop);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "PLANS", href: "#1" },
    { name: "TEAM", href: "#3" },
    { name: "PROJECTS", href: "#2" },
    { name: "TECH", href: "#4" },
  ];

  return (
    <div>
      <nav
        id="navbar"
        className={`transition-all duration-500 ${
          isSticky
            ? `fixed top-0 left-0 w-full bg-dark shadow-lg z-50 ${
                scrollDirection === "up" ? "translate-y-0" : "-translate-y-full"
              }`
            : "relative bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-16 py-4">
          <img
            className="w-14 h-14 bg-light rounded-full"
            src={Logo}
            alt="Logo"
          />
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-light text-lg font-semibold relative cursor-pointer"
              >
                <a
                  href={item.href}
                  className="before:bg-light before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-1 hover:before:w-full before:transition-all hover:before:duration-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="text-light md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-dark border-t border-light/20">
            <ul className="flex flex-col items-center gap-6 py-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-light text-lg font-semibold cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
