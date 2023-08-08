import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef } from "react";

export default function Header() {
   const headerRef = useRef<HTMLHeadElement | null>(null);

   useEffect(() => {
      const handleScroll = () => headerRef.current?.classList.toggle("sticky", window.scrollY > 0);

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header className="top-0 z-20 duration-700" ref={headerRef}>
         <nav className="flex justify-between items-center p-5 m-auto max-w-[1400px]">
            <img src={logo} alt="logo" className="w-20 h-8" />
            <ul className="flex list-none gap-10 uppercase font-semibold duration-500">
               <li className="hover-nav-top">men</li>
               <li className="hover-nav-top">women</li>
               <li className="hover-nav-top">boys</li>
               <li className="hover-nav-top">women</li>
               <li className="hover-nav-top">girls</li>
               <li className="hover-nav-top">collections</li>
            </ul>
            <FiShoppingCart className="text-3xl cursor-pointer" />
         </nav>
      </header>
   );
}
