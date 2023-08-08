import wave from "../../assets/images/bg-showcase.svg";
import Tilt from "react-parallax-tilt";
import ButtonBuyNow from "../ButtonBuyNow";
import shoeTilt from "../../assets/images/tenis-tilt.png";

export default function ShowcaseGrid() {
   return (
      <div className="w-full bg-[var(--color-secondery)]">
         <img src={wave} alt="" className="w-full mb-10" />
         <div className="max-w-[1400px] m-auto px-5 pb-24 grid-section">
            <ShoeTiltShowcase />
            <VideoShowcase />
            <CardShowcase />
         </div>
      </div>
   );
}

function ShoeTiltShowcase() {
   return (
      <div className="div1 shadow-2xl">
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
   );
}

function VideoShowcase() {
   return (
      <div className="div2 rounded-xl overflow-hidden shadow-2xl">
         <div className="m-auto max-w-[1400px] overflow-hidden">
            <video
               autoPlay={true}
               muted
               loop={true}
               className="w-full h-full object-cover rounded-xl shadow-video-section border-[3px] border-[var(--color-secondery)]"
            >
               <source
                  src="https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/6767b74f-3c5e-429c-be01-791e0a86054d/c6056678-cce6-473f-acb5-a3dee18f6ea2/main.mp4"
                  type="video/mp4"
               />
            </video>
         </div>
      </div>
   );
}

function CardShowcase() {
   return <div className="card-showcase div3 rounded-xl shadow-2xl"></div>;
}
