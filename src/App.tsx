import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselShoes from "./components/CarouselShoes";
import ShowcaseGrid from "./components/ShowcaseGrid";
import ShowcaseGif from "./components/ShowcaseGif";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

register();

export default function App() {
   return (
      <>
         <Header />
         <Hero />
         <CarouselShoes />
         <ShowcaseGrid />
         <ShowcaseGif />
         <Faq />
         <Footer />
      </>
   );
}
