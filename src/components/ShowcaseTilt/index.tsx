import wave from "../../assets/images/bg-showcase.svg";

export default function ShowcaseTilt() {
   return (
      <section className="w-full bg-[var(--color-secondery)]">
         <img src={wave} alt="" className="w-full mb-10" />
         <div className="max-w-[1400px] m-auto px-5">
            <div className="tilt-card-section-degrade rounded-xl">
               <div className="">
                  <img src="" alt="" />
               </div>
               <div className="">
                  <h1 className="text-5xl text-[var(--color-secondery)] mb-8">It's A New Shoe!</h1>
                  <p className="font-mono text-[var(--color-secondery)] mb-6">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. I nventore aperiam
                     commodi corporis officiis quas quidem omnis praesentium obcaecati, deserunt
                     pariatur eligendi provident perspiciatis tempore, totam vitae deleniti?
                     Perspiciatis, unde molestias!
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
