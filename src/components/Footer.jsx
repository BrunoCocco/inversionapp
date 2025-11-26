function Footer() {
  return (
    <footer className="footer">
      <section className="footer__content">
        <article className="footer__info">
          <h4>CrowInversor</h4>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </article>

        <article className="footer__links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </article>

        <article className="footer__contacto">
          <p>Email: info@crowinversor.com</p>
          <p>Tel: +35 604 79 7556</p>
        </article>
      </section>
    </footer>
  );
}

export default Footer;