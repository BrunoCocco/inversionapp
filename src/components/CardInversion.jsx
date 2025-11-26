function CardInversion({ inversion }) {
  return (
    <article className="card-inversion shadow rounded">
      <h3 className="card-inversion__titulo">{inversion.nombre}</h3>
      <p className="card-inversion__dato">
        <strong>Capital:</strong> €{inversion.capital}
      </p>
      <p className="card-inversion__dato">
        <strong>Tasa:</strong> {inversion.tasa}%
      </p>
      <p className="card-inversion__dato">
        <strong>Años:</strong> {inversion.años}
      </p>
    </article>
  );
}

export default CardInversion;
