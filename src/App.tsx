import { register } from "swiper/element/bundle";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselShoes from "./components/CarouselShoes";
import ShowcaseTilt from "./components/ShowcaseTilt";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function App() {
   return (
      <>
         <Header />
         <Hero />
         <CarouselShoes />
         <ShowcaseTilt />
      </>
   );
}
