import './Footer.css';

function Myfooter() {
    return(
        <footer>
        <nav>
          <ul id="footer-links">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Ajuda</a></li>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Autor</a></li>
          </ul>
        </nav>
        <p id="copyright">&copy;2024 Fluxo</p>
      </footer>
    )
}

export default Myfooter;