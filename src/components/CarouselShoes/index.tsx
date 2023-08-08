import { Swiper, SwiperSlide } from "swiper/react";
import CardShoe from "../CardShoe";
import { Navigation } from "swiper/modules";
import "./styles.css";

const shoes = [
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-1.webp",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-3.webp",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-4.webp",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-5.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-6.webp",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-7.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-8.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-9.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-10.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-11.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-14.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
   {
      title: "New Shoe",
      price: 499,
      image: "tenis-15.png",
      describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
   },
];

export default function CarouselShoes() {
   return (
      <section className="w-full">
         <div className="m-auto max-w-[1400px]">
            <h1 className="text-5xl text-[var(--color-secondery)] mb-8">You Might Like</h1>
            {[1, 2, 3].map((e, i) => (
               <div className="mb-20">
                  <Slides key={i} delay={e} />
               </div>
            ))}
         </div>
      </section>
   );
}

function Slides({ delay }: { delay: number }) {
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
         {shoes.map((e, i) => (
            <SwiperSlide key={i}>
               <CardShoe {...e}>a</CardShoe>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
