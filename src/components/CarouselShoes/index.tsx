import { Swiper, SwiperSlide } from "swiper/react";
import CardShoe from "../CardShoe";
import { Navigation } from "swiper/modules";
import "./styles.css";

export default function CarouselShoes() {
   return (
      <section className="w-full">
         <div className="m-auto max-w-[1400px] px-5">
            <h1 className="text-5xl text-[var(--color-secondery)] mb-8">You Might Like</h1>
            {[1, 2, 3].map((e, i) => (
               <div className="mb-20" key={i}>
                  <Slides key={i} delay={e} />
               </div>
            ))}
         </div>
      </section>
   );
}

function Slides({ delay }: { delay: number }) {
   // gera um array fake de 1 a 12 para pegar as imagens dos tenis em images
   const fakeShoesArr = Array.from({ length: 12 }, (_, index) => index + 1);

   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={3}
         loop
         autoplay={{
            disableOnInteraction: true,
            delay: 2500 * delay,
         }}
         navigation
         modules={[Navigation]}
      >
         {fakeShoesArr.map((e, i) => (
            <SwiperSlide key={i}>
               <CardShoe index={e} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
