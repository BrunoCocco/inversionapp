import CardInversion from "../components/CardInversion";
import {inversiones} from "../components/productos";
function LayProductos() {
  return (
    <>
      <section className="card-grid">
        {inversiones.map((inv) => (
          <CardInversion key={inv.id} inversion={inv}/>
        ))}
      </section>
    </>
  );
}

export default LayProductos;
