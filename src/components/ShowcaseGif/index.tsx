import gif from "../../assets/images/nike-gif-3.gif";
import ButtonBuyNow from "../ButtonBuyNow";

export default function ShowcaseGif() {
   return (
      <section className="w-full bg-white py-24">
         <div className="max-w-[1400px] px-5 m-auto flex gap-16 items-center justify-between">
            <div className="flex-1">
               <h1 className="text-5xl text-[var(--color-secondery)] mb-8">It's A New Shoe!</h1>
               <p className="font-mono text-xl text-[var(--color-secondery)] mb-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. I nventore aperiam
                  commodi corporis officiis quas quidem omnis praesentium obcaecati.
               </p>
               <ButtonBuyNow />
            </div>
            <div className="flex-1">
               <img src={gif} alt="" />
            </div>
         </div>
      </section>
   );
}
