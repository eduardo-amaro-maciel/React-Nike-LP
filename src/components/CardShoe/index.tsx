import { HiPlus } from "react-icons/hi";

type ShoesProps = {
   title: string;
   describe: string;
   price: number;
   image: string;
};

export default function CardShoe({ title, describe, price, image }: ShoesProps) {
   function getImgUrl(name: string) {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
   }

   return (
      <div className="flex w-[430px] flex-col">
         <div className="h-[430px] bg-gray-200 flex items-center justify-center rounded-sm">
            <img src={getImgUrl(image)} alt="imagem tenis" className="max-w-sm" />
         </div>
         <div className="flex flex-col mt-3 gap-3">
            <span className="font-mono text-3xl">{title}</span>
            <p className="font-mono text-gray-600 w-2/4 mb-6">{describe}</p>
            <div className="flex justify-between items-center">
               <small className="font-mono text-xl">R${price}</small>
               <button className="flex items-center gap-2 p-2 mr-2 font-mono border rounded-[4px] border-[var(--color-secondery)] hover:text-white duration-700 hover:bg-[var(--color-secondery)]">
                  <HiPlus />
                  Add to Card
               </button>
            </div>
         </div>
      </div>
   );
}
