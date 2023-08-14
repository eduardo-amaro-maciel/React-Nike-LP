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
import AnimatedCursor from "react-animated-cursor";

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
         <AnimatedCursor
            innerSize={8}
            outerSize={32}
            color="210,242,84"
            outerAlpha={0.5}
            innerScale={0.9}
            outerScale={2}
            trailingSpeed={5}
         />
      </>
   );
}
