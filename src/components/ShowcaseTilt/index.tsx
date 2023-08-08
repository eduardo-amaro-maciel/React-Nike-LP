import wave from "../../assets/images/bg-showcase.svg";
import Tilt from "react-parallax-tilt";
import ButtonBuyNow from "../ButtonBuyNow";
import shoeTilt from "../../assets/images/tenis-tilt.png";

export default function ShowcaseTilt() {
   return (
      <section className="w-full bg-[var(--color-secondery)]">
         <img src={wave} alt="" className="w-full mb-10" />
         <div className="max-w-[1200px] m-auto px-5 pb-24">
            <div className="tilt-card-section-degrade rounded-xl">
               <div className="flex w-full items-center justify-center overflow-hidden">
                  <Tilt className="mt-6">
                     <img src={shoeTilt} alt="" className=" w-[500px] rotate-[25deg] shoe-filter" />
                  </Tilt>
               </div>
               <div className="p-10 flex justify-center flex-col">
                  <h1 className="text-5xl text-[var(--color-secondery)] mb-8">It's A New Shoe!</h1>
                  <p className="font-mono text-xl text-[var(--color-secondery)] mb-6">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. I nventore aperiam
                     commodi corporis officiis quas quidem omnis praesentium obcaecati.
                  </p>
                  <ButtonBuyNow />
               </div>
            </div>
         </div>
      </section>
   );
}
