import imgBillete from "../assets/billete.png";
import imgInversion from "../assets/inversion.png";
import imgProducto from "../assets/producto.png";
import "../App.css";

function Botones() {
  return (
    <>
      <section className="botonera">
        <article className="botonera__content">
          <button className="botonera__btn">
            <img src={imgProducto} alt="" />
          </button>
          <button className="botonera__btn">
            <img src={imgInversion} alt="inversionBoton" />
          </button>
          <button className="botonera__btn">
            <img src={imgBillete} alt="billeteBoton" />
          </button>
        </article>
      </section>
    </>
  );
}
export default Botones;
