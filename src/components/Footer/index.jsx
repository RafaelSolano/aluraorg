import "./styles.css"

const Footer = ()=>{
    return<footer className="footer">
        <div className="footer__redes">
            <ul>
                <li>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </li >
                <li>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </li>
            </ul>
        </div>
        <div className="footer__logo-container">
            <img className="footer__img" src="img/Logo.svg" alt="logo"></img>
        </div>
        <div className="footer__text">
            <p>Desarrollado por Rafael Solano</p>
        </div>
        
        
    </footer>
    

}

export default Footer;