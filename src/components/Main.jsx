import Productos from '../layouts/Productos.jsx'
import Inversion from '../layouts/Inversion.jsx'
import Cartera from '../layouts/Cartera.jsx'


function Main({ vista }) {
  return (
    <>
      {vista === "productos" && <Productos />}
      {vista === "inversion" && <Inversion />}
      {vista === "cartera" && <Cartera />}
    </>
  );
}


export default Main;