import { HiPlus } from "react-icons/hi";

type ShoesProps = {
   index: number;
};

export default function CardShoe({ index }: ShoesProps) {
   function getImgUrl() {
      return new URL(`../../assets/images/tenis-${index}.png`, import.meta.url).href;
   }

   return (
      <div className="flex w-[430px] flex-col">
         <div className="h-[430px] bg-gray-200 flex items-center justify-center rounded-sm">
            <img src={getImgUrl()} alt="imagem tenis" className="max-w-sm" />
         </div>
         <div className="flex flex-col mt-3 gap-3">
            <span className="font-mono text-3xl">New Show</span>
            <p className="font-mono text-gray-600 w-2/4 mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="flex justify-between items-center">
               <small className="font-mono text-xl">R$499</small>
               <button className="flex items-center gap-2 p-2 mr-2 font-mono border rounded-[4px] border-[var(--color-secondery)] hover:text-white duration-700 hover:bg-[var(--color-secondery)]">
                  <HiPlus />
                  Add to Card
               </button>
            </div>
         </div>
      </div>
   );
}
