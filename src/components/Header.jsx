import imgEdificio from "../assets/edificio.png";

function Header() {
  return (
    <header className="header">
      <article className="header__content">
        <img src={imgEdificio} alt="Logo CrowInversor" className="header__logo" />
        <h2 className="header__title">CrowInversor</h2>
      </article>
    </header>
  );
}

export default Header;
