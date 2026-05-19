import { Link } from "react-router-dom";
// import "./header.css";

function Header() {
    return(
        <header>
            <nav>
                <Link to="/" >Home</Link> {" | "}         
                <Link to="/quemsomos" >Quem Somos</Link> {" | "}             
                <Link to="/cadfrutas" >Frutas</Link> {" | "}        
                <Link to="/Produtos" >Produtos</Link>              
            </nav>
        </header>
    )
}

export default Header