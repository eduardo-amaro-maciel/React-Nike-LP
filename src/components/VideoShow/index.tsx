export default function VideoShow() {
   return (
      <section className="w-full pt-16 mb-36">
         <div className="m-auto max-w-[1400px] px-5">
            <h1 className="text-5xl text-[var(--color-secondery)] mb-8">Tops Nike</h1>
            <video
               autoPlay={true}
               muted
               loop={true}
               className="w-full h-[400px] object-cover rounded-md shadow-video-section border-[3px] border-[var(--color-secondery)]"
            >
               <source
                  src="https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/6767b74f-3c5e-429c-be01-791e0a86054d/c6056678-cce6-473f-acb5-a3dee18f6ea2/main.mp4"
                  type="video/mp4"
               />
            </video>
         </div>
      </section>
   );
}

{
   /* <video
   src={
      "https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/6767b74f-3c5e-429c-be01-791e0a86054d/c6056678-cce6-473f-acb5-a3dee18f6ea2/main.mp4"
   }
   className="w-full h-[400px] object-cover rounded-md"
   autoPlay={true}
   muted
   loop={true}
/>  */
}
