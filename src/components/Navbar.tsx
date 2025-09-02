import { useState, useEffect } from 'react';
import Link from "next/link";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const controlNavbar = () => {
    const isAtTop = window.scrollY <= 0;
    // const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

    if (typeof window !== "undefined") {
      if (!isAtTop) {
        if (window.scrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      } else {
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);

      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 w-full left-0 z-50 bg-white transition-transform duration-[0.5s] ease-out ${
      (scrolled && showNav) ? 'translate-y-0 ' : 'translate-y-[-100%]'
    }`}>
      <nav className="navContainer px-[5rem] h-[6rem] flex items-center justify-between w-full">
        <div className="flex items-center gap-[2rem] max-lg:hidden">
          <Link href="/playground" className="text-black hover:opacity-70 transition-opacity font-generalSans text-[1.8rem] font-[400]">
            Playground
          </Link>
          <Link href="/services" className="text-black hover:opacity-70 transition-opacity font-generalSans text-[1.8rem] font-[400]">
            Services
          </Link>
        </div>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/images/logoNavBlack.svg" width={217} height={63} className="w-[16.6rem] h-auto max-md:w-[12rem]"/>
        </Link>

        <div className="flex items-center gap-[2rem] max-lg:hidden">
          <Link href="/discovery-call" className="text-black hover:opacity-70 transition-opacity font-generalSans text-[1.8rem] font-[400]">
            Discovery Call
          </Link>
          <Link href="/contact" className="text-black hover:opacity-70 transition-opacity font-generalSans text-[1.8rem] font-[400]">
            Say Hello
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
