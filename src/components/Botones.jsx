import imgBillete from "../assets/billete.png";
import imgInversion from "../assets/inversion.png";
import imgProducto from "../assets/producto.png";
import "../App.css";

function Botones({setVista}) {
  return (
    <>
      <section className="botonera">
        <article className="botonera__content">
          <button onClick={()=>setVista("productos")} className="botonera__btn">
            <img src={imgProducto} alt="" />
          </button>
          <button onClick={()=>setVista("inversion")} className="botonera__btn">
            <img src={imgInversion} alt="inversionBoton" />
          </button>
          <button onClick={()=>setVista("cartera")} className="botonera__btn">
            <img src={imgBillete} alt="billeteBoton" />
          </button>
        </article>
      </section>
    </>
  );
}
export default Botones;
