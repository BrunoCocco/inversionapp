import { useState } from "react";

function Cartera() {
    const [dinero , setDinero]= useState(0)
    const [operaciones, setOper]= useState([])
    
    function AgregarDinero (){
        setDinero(dinero + 10);
        setOper(prev => [...prev, "+10"]);
    }
      function RetirarDinero (){
        setDinero(dinero - 10);
        setOper(prev => [...prev, "-10"]);
    }

  return (
    <>
<section className="cartera">
  {/* Bloque principal (saldo + botones) */}
  <article className="cartera__panel">
    <h1>Cartera de Inversión</h1>

    <div className="cartera__saldo">
      <h3>Tu saldo es: ${dinero}</h3>
    </div>

    <div>
      <button onClick={AgregarDinero}>Agregar $</button>
      <button onClick={RetirarDinero}>Retirar $</button>
    </div>
  </article>

  {/* Bloque lateral (historial de operaciones) */}
  <article className="cartera__historial">
    <h2>Historial</h2>
    {operaciones.map((op, i) => (
      <h3 key={i}>Operación: {op}</h3>
    ))}
  </article>
</section>

</>
  );
}

export default Cartera;
