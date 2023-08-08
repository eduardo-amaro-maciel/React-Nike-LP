import "./style.css";
import thumb from "../../assets/images/nike-thumb.png";

export default function Hero() {
   return (
      <section className="thumb">
         <span className="parallax-text" data-text="NIKE">
            NIKE
         </span>
         <img src={thumb} id="nike-thumb" />
      </section>
   );
}
